# Earndeck deployment — Lightsail staging

Target preview domain: `earndeck.ycusriya.online`. This is a **staging deployment**, not replacement of `www.earndeckshipping.com`.

## Guardrails
- Do **not** stop or replace the existing UBIQ, Laravel, Nginx, Apache, or other containers.
- Earndeck's Docker port is bound to `127.0.0.1:5187`, **not** a public interface.
- Existing reverse proxy owns ports 80/443; create a **new hostname-only vhost**, rather than editing or replacing a default site.
- Staging should return `X-Robots-Tag: noindex, nofollow` at the reverse proxy, since app SEO canonicals currently refer to the primary Earndeck Shipping domain.
- DNS/HTTPS cannot be established from the repository alone; use the Lightsail instance's **static public IPv4 address**, not an ephemeral private IP.
- Forms require actual Resend settings in untracked `.env.production`. Do not paste keys into chat.

## 1 — Prepare on Ubuntu Lightsail
Check DNS and service ownership first:
```bash
sudo ss -lntp | grep -E ':80 |:443 |:5187 ' || true
sudo docker ps --format 'table {{.Names}}\t{{.Ports}}\t{{.Status}}'
nginx -v 2>&1 || true
apache2 -v 2>&1 | head -n 2 || true
```
Choose a separate directory, e.g. `/opt/apps/earndeck-shipping`:
```bash
sudo mkdir -p /opt/apps/earndeck-shipping
sudo chown "$USER":"$USER" /opt/apps/earndeck-shipping
git clone https://github.com/infosloption-byte/earndeck-shipping.git /opt/apps/earndeck-shipping
cd /opt/apps/earndeck-shipping
cp .env.production.example .env.production
nano .env.production
chmod 600 .env.production
sudo docker compose -f compose.lightsail.yml up -d --build
sudo docker compose -f compose.lightsail.yml ps
curl -I http://127.0.0.1:5187/
```
If the clone fails due to private GitHub access, use an SSH deploy key tied to the repository (read only); never put credentials into a URL or the repository.

## 2 — DNS
Add **A record**: host `earndeck` in the `ycusriya.online` DNS zone -> Lightsail instance **static public IPv4**. Do not change the root/domain's existing records. Wait until `dig +short earndeck.ycusriya.online` resolves to that address. Remove any conflicting AAAA record unless IPv6 routing is actually configured.

## 3 — Reverse proxy (depends on existing server)
Do not blindly start Nginx if Apache currently owns 80/443. For a server already using Nginx, an **example new HTTP vhost** is:
```nginx
server {
    listen 80;
    server_name earndeck.ycusriya.online;
    add_header X-Robots-Tag "noindex, nofollow" always;
    client_max_body_size 5m;
    location / {
        proxy_pass http://127.0.0.1:5187;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;
    }
}
```
Only add this after confirming current proxy and virtual-host conventions. Validate with `sudo nginx -t` before reloading. Once DNS works, use the **existing** certificate automation (often Certbot) to issue HTTPS for **only** the new subdomain; do not replace other certificates. For Apache or Dockerized Traefik/Caddy, use its established configuration instead.

## 4 — Verify
```bash
curl -I http://127.0.0.1:5187/
curl -I https://earndeck.ycusriya.online/
curl -sI https://earndeck.ycusriya.online/ | grep -i x-robots-tag
node scripts/check-seo.mjs https://earndeck.ycusriya.online
node scripts/audit-site.mjs https://earndeck.ycusriya.online
node scripts/check-assets.mjs https://earndeck.ycusriya.online
```
Note: the sitemap is intentionally pointing at `www.earndeckshipping.com`. On preview, checks may report canonical/site origin mismatches; that is deliberate to keep staging from competing with the main domain. The smoke tests are best run against localhost inside the server before the public cutover. Check response headers, assets, navigation and forms separately on staging.

## Updates
```bash
cd /opt/apps/earndeck-shipping
git pull --ff-only origin main
sudo docker compose -f compose.lightsail.yml up -d --build
sudo docker compose -f compose.lightsail.yml logs --tail=100 earndeck
```
