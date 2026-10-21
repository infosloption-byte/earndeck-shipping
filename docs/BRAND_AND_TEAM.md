# Brand, team and services

## Logo
The company's real logo is built into the site. Source artwork lives in `public/brand/`, generated from the supplied
white-on-transparent logo so it stays legible on every surface:

| File | Use |
| --- | --- |
| `emblem-light.png` / `logo-light.png` | white artwork, for **dark** backgrounds (header, footer, hero, loader) |
| `emblem-dark.png` / `logo-dark.png` | navy artwork, for **light** backgrounds |
| `emblem-*` | wheel-and-anchor emblem only; `logo-*` is emblem + EARNDECK SHIPPING wordmark |
| `app/icon.png`, `app/apple-icon.png` | favicon / home-screen icon (white emblem on brand navy) |

In code use `<Brand tone="light|dark" />`, `<BrandMark tone=... />` or `<Logo tone=... />` from `components/Brand.tsx`.
To replace the artwork, overwrite the four PNGs in `public/brand/` (keep the same file names and aspect ratios).

## Page loader
`components/NavigationProgress.tsx` shows the animated logo (`components/LogoLoader.tsx`) as soon as an internal
menu/link is clicked and keeps it up until the destination route has rendered **and** its fonts and images are ready
(minimum 600 ms so it never flashes; 5 s wait cap; 15 s fail-safe). Same-page `#hash` links and the Services
dropdown button do not trigger it. `app/loading.tsx` reuses the same loader for server-side loading.

## Team
Members are listed in `lib/team.ts`; the About page (`#team`) renders them.

- **Photos:** save a portrait as `public/team/<slug>.jpg` (or `.jpeg`, `.png`, `.webp`) using the member's `slug`,
  e.g. `public/team/thusith-fonseka.jpg`. It is picked up automatically at build time. Without a photo a branded
  monogram card is shown. Use roughly 4:4.2 portrait crops, head-and-shoulders, at least 800 px wide.
- **Content:** the current roster was compiled from public sources, **not** copied from the legacy site, because the legacy
  site is a JavaScript-only app that could not be read automatically. Before launch, compare every name, role and
  description with the legacy About/Team page and the company, and obtain consent and approved photographs.

## Services
All services are defined in `lib/site.ts` (`services`, `serviceGroups`) with page content in `lib/service-content.ts`.
The first nine mirror the original site's keywords (draft, bunker, cargo, container, cargo certification,
on/off-hire, internal ISM, MLC, harmonized audits). Hull & machinery, pre-purchase/vetting, compass adjustment and
P&I condition surveys were added from public information and still need to be confirmed against the legacy site's
service list. The `redirects()` in `next.config.ts` are likewise assumptions about legacy URLs and must be checked
against a real crawl before the DNS switch.
