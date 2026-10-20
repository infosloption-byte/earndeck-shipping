# Client approval and assets

## Official logo
The client's official logo is supplied separately as an uploaded WebP image. Copy it into `public/earndeck-logo.webp` before running or deploying. The GitHub integration currently cannot transfer the uploaded binary image directly to this repository.

PowerShell (run in the repository root after saving the uploaded logo locally):
```powershell
New-Item -ItemType Directory -Force public
Copy-Item "C:\path\to\client-logo.webp" "public\earndeck-logo.webp"
```
Commit `public/earndeck-logo.webp` after checking it in the browser. Do not release without the brand asset.

## Team
The people shown on About were sourced from public directories, not an accessible authoritative roster on the legacy site. Confirm names, roles, consent, up-to-date photographs and biographies with the client. No unverified portraits have been inserted.

## Navigation
Next.js suspense loading state and a path-change overlay are enabled. Overlay clears on successful pathname changes or after a 12-second fail-safe. It does not delay an already-loaded route for decorative timing.
