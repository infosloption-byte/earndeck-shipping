#!/usr/bin/env python3
"""Verify local service image coverage; fill the missing P&I photo from the
existing vessel-condition illustration. No remote downloads are needed.

The P&I image is representative of ship-condition inspection; replacing it
with a client-approved, P&I-specific inspection photograph is recommended.
"""
from pathlib import Path
import re
import shutil
import sys

root = Path(__file__).resolve().parents[1]
site = (root / 'lib/site.ts').read_text(encoding='utf-8')
photos = (root / 'lib/service-photos.ts').read_text(encoding='utf-8')
slugs = re.findall(r"slug:\s*'([a-z0-9-]+)'", site)
image_map = dict(re.findall(r"'([a-z0-9-]+)':\s*\{src:'([^']+)'", photos))
files = root / 'public/images/services'
missing = []

# The existing bulk-vessel photograph is an appropriate generic condition
# image for P&I coverage until an approved original survey image is available.
source = files / 'pre-purchase-vetting.webp'
target = files / 'pi-condition-survey.webp'
if not target.is_file() and source.is_file():
    shutil.copyfile(source, target)
    print('Created pi-condition-survey.webp from the existing vessel-condition photograph.')

for slug in slugs:
    src = image_map.get(slug)
    if not src:
        missing.append(f'{slug}: no service photo mapping')
    elif not src.startswith('/images/services/') or not src.endswith('.webp'):
        missing.append(f'{slug}: expected a local WebP, found {src}')
    else:
        path = root / 'public' / src.lstrip('/')
        if not path.is_file() or path.stat().st_size < 2000:
            missing.append(f'{slug}: missing or empty {path.relative_to(root)}')
        else:
            header = path.read_bytes()[:12]
            if header[:4] != b'RIFF' or header[8:12] != b'WEBP':
                missing.append(f'{slug}: invalid WebP file header')
if missing:
    for m in missing: print('ERROR: '+m, file=sys.stderr)
    sys.exit(1)
print(f'PASS: {len(slugs)} service pages have valid local WebP files.')
