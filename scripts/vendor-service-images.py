#!/usr/bin/env python3
"""Vendor service photography and update the application to use only local assets.

Requires Python 3.11+, Pillow and requests. Designed for a one-time GitHub Actions run.
Files are validated as actual images before any source-code path is changed.
"""
from __future__ import annotations
from pathlib import Path
from io import BytesIO
import re
import sys
import requests
from PIL import Image, ImageOps, UnidentifiedImageError

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "lib/service-photos.ts"
DEST = ROOT / "public/images/services"
TIMEOUT = 25

text = SOURCE.read_text(encoding="utf-8")
pattern = re.compile(r"'([a-z0-9-]+)':\s*\{src:'(https://images\.unsplash\.com/[^']+)'")
matches = pattern.findall(text)
if not matches:
    print("No remote images found: all service photos are already local.")
    sys.exit(0)

sources = {slug: url for slug, url in matches if not slug.endswith("-alt")}
if len(sources) < 12:
    sys.exit(f"Expected at least 12 named services; got {len(sources)}")

session = requests.Session()
session.headers.update({"User-Agent": "EarndeckShipping-ImageVendor/1.0"})
processed: dict[str, bytes] = {}
problems: list[str] = []
for slug, url in sources.items():
    print(f"Fetching {slug}: {url}", flush=True)
    try:
        res = session.get(url, params={"w": 1200, "q": 78, "fit": "crop", "auto": "format"}, timeout=TIMEOUT)
        res.raise_for_status()
        if not res.headers.get("content-type", "").startswith("image/"):
            raise ValueError(f"Not image content: {res.headers.get('content-type')}")
        if len(res.content) < 2000 or len(res.content) > 12_000_000:
            raise ValueError(f"Suspicious download size: {len(res.content)} bytes")
        with Image.open(BytesIO(res.content)) as im:
            im.load()
            if im.width < 450 or im.height < 300:
                raise ValueError(f"Too small: {im.size}")
            im = ImageOps.exif_transpose(im).convert("RGB")
            im.thumbnail((1200, 900), Image.Resampling.LANCZOS)
            output = BytesIO()
            im.save(output, "WEBP", quality=78, method=6)
        processed[slug] = output.getvalue()
        print(f"  Verified: {len(processed[slug])} WebP bytes", flush=True)
    except (requests.RequestException, ValueError, UnidentifiedImageError, OSError) as exc:
        problems.append(f"{slug}: {exc}")

if problems:
    print("Image validation failed. Nothing was modified:", file=sys.stderr)
    for problem in problems:
        print(" - " + problem, file=sys.stderr)
    sys.exit(1)

DEST.mkdir(parents=True, exist_ok=True)
for slug, contents in processed.items():
    (DEST / f"{slug}.webp").write_bytes(contents)

for slug, url in sources.items():
    text = text.replace(f"'{slug}': {{src:'{url}'", f"'{slug}': {{src:'/images/services/{slug}.webp'")
# Remove historical fallback entry that would still reference a remote URL.
text = re.sub(r"\s*'cargo-certification-alt':\s*\{[^\n]*\},?\n", "\n", text)
SOURCE.write_text(text, encoding="utf-8")
grid = ROOT / "components/ServiceGrid.tsx"
gridtext = grid.read_text(encoding="utf-8")
gridtext = gridtext.replace(
    "'https://images.unsplash.com/photo-1689798448813-0ded9659ad9b'",
    "'/images/services/draft-survey.webp'",
)
grid.write_text(gridtext, encoding="utf-8")
print(f"Success: {len(processed)} local WebP photographs. Service sources updated.")
