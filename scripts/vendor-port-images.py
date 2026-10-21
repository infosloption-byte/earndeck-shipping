#!/usr/bin/env python3
"""Download location-specific Commons photographs to public/images/ports/.

Verifies every image before writing, converts to compressed WebP, and records
source/licence details in docs/PORT_IMAGE_CREDITS.md.
Run once on a machine with Internet; commit the generated four files.
"""
from pathlib import Path
from io import BytesIO
import sys
import requests
from PIL import Image, ImageOps, UnidentifiedImageError

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/images/ports'
files={
 'colombo':'ColomboHarbour-SriLanka02.jpg',
 'galle':'Galle_Harbour.JPG',
 'hambantota':'Hambantota_International_Port_View.jpg',
 'trincomalee':'Trincomalee_natural_harbour.jpg',
}
session=requests.Session()
session.headers['User-Agent']='EarndeckWebsiteEditorial/1.0 (https://www.earndeckshipping.com; media attribution)'
images={}
errors=[]
for slug,filename in files.items():
    url='https://commons.wikimedia.org/wiki/Special:FilePath/'+filename
    print(f'Downloading {slug}: {url}',flush=True)
    try:
        response=session.get(url,params={'width':'1400'},timeout=50)
        response.raise_for_status()
        if not response.headers.get('Content-Type','').startswith('image/'):
            raise ValueError('Source did not return image content')
        with Image.open(BytesIO(response.content)) as im:
            im.load()
            if im.width<600 or im.height<350:
                raise ValueError(f'Image is too small: {im.size}')
            im=ImageOps.exif_transpose(im).convert('RGB')
            im.thumbnail((1400,1000),Image.Resampling.LANCZOS)
            output=BytesIO()
            im.save(output,'WEBP',quality=80,method=6)
            images[slug]=output.getvalue()
            print(f'  Verified {im.width}x{im.height}: {len(images[slug])} bytes',flush=True)
    except (requests.RequestException,ValueError,OSError,UnidentifiedImageError) as exc:
        errors.append(f'{slug}: {exc}')
if errors:
    print('Download incomplete: no files were changed.','\n'.join(errors),sep='\n',file=sys.stderr)
    sys.exit(1)
OUT.mkdir(parents=True,exist_ok=True)
for slug,data in images.items():
    (OUT/(slug+'.webp')).write_bytes(data)
print('SUCCESS: four local port WebP images written.')
