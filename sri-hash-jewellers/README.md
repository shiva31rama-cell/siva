# SRI HASH Jewellers 💎

Production-style static website foundation for SRI HASH Jewellers, Bhimavaram.

## Business model reflected in the site

SRI HASH currently operates without a physical showroom. The website therefore focuses on direct customer communication, jewellery design discovery, custom jewellery enquiries, coordination with jewellery-making resources, and home delivery.

## Current verified details

- Business: SRI HASH Jewellers
- Location: Bhimavaram
- Phone: 8309535451
- Alternative contact: 8500004309
- Email: srihash9801@gmail.com
- Hours: 8:00 AM–9:00 PM
- Holidays: None
- Languages planned: English + Telugu
- Home delivery: Available
- Customer login: Not required
- Gold-rate widget: Not included
- Theme: White / premium

## Before production launch

1. Replace catalogue placeholders with approved jewellery photographs.
2. Add the final approved SRI HASH logo at `assets/brand/logo.svg` or `assets/brand/logo.png`.
3. Add Telugu translations after the business copy is approved.
4. Verify phone/WhatsApp numbers and every public business statement.
5. Test mobile, desktop, accessibility, links and enquiry forms.
6. If real online payments are added, use a compliant payment provider and a server-side verification flow. Never trust a browser-only payment success message.
7. If persistent orders/enquiries are required, add a Cloudflare Worker/API and suitable storage. Do not place private keys in frontend files.

## Cloudflare Pages

The current website is static and can be deployed from the `sri-hash-jewellers` directory of this repository.

For a dedicated repository later, copy this directory to the repository root and use the root as the Pages build directory. No build command is required for the current HTML/CSS/JS version.

## Manual content locations

- Business copy: `index.html` text sections.
- Product catalogue: `PRODUCTS` array near the bottom of `index.html`.
- Logo: planned `assets/brand/` location.
- Social links: navigation/footer area; leave blank until official links are supplied.
- WhatsApp numbers: the `wa.me` links and `openWhatsApp()` function.

## Architecture notes

This version intentionally avoids a backend because a static site is safer, cheaper and easier to deploy on Cloudflare Free. The code includes comments marking future API/backend integration points.

Suggested production evolution:

`Static site → Cloudflare Pages → Worker/API → validated order/enquiry storage → admin dashboard → optional AI features`

Do not add a database, authentication, payment gateway, or AI API merely for appearance. Add each only when the business workflow actually needs it.
