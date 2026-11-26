# Image attribution

The following photographs are stored locally and used under the
[Pexels license](https://www.pexels.com/license/):

- `hero-donor.webp` — “A person donating blood at a clinic” by Anna Madera.
  Source: https://www.pexels.com/photo/a-person-donating-blood-at-a-clinic-18523230/
- `process-donor.webp` — “A person donating blood” by Lucas Oliveira.
  Source: https://www.pexels.com/photo/a-person-donating-blood-4680300/

The files were resized and converted to WebP for web delivery. No generative
editing or content alteration was applied.

## eKnjižica

Files in `eknjizica/`:

- `app-store-badge-hr.svg` — Apple's official Croatian “Download on the App
  Store” badge, downloaded unaltered from
  https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/hr-hr
  and used under Apple's App Store marketing guidelines.
- `google-play-badge-hr.png` — Google's official Croatian Google Play badge,
  downloaded unaltered from
  https://play.google.com/intl/en_us/badges/static/images/badges/hr_badge_web_generic.png
  and used under Google Play's badge guidelines.
- `zalihe-krvi.png` — the eKnjižica blood stocks screen from the app's
  Google Play phone screenshots (1080 × 1920). It shows national HZTM
  stock levels and no member's name or record.
- `download-qr.svg` — QR code for
  https://www.crvenikrizbujedarivatelji.gdckapp.com/download, generated with
  `pnpm dlx qrcode@1.5.4 -t svg -e M -q 2 -d "#2b0b12" -l "#ffffff" -o download-qr.svg <url>`.
  Regenerate it if `MOBILE_APP_DOWNLOAD_URL` in `src/lib/mobile-app.ts` changes.

The trademark notice for both badges is shown in the site footer.
