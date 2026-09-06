# Siva — Pro Menu & Website Template Library

A reusable, beginner-friendly but production-minded collection of front-end templates. Default design is clean, responsive and light/white-theme.

## 01 — Menu systems

- `templates/01-simple-menu` — premium display-only digital menu with search and categories.
- `templates/02-menu-with-cart` — searchable menu, +/− quantities, My Orders drawer, temporary total and local persistence.

## 02 — Universal website foundation

- `templates/03-universal-website` — master configurable website foundation.

## 03 — Separate end-to-end vertical templates

1. `templates/04-restaurant-pro` — restaurant website + menu + temporary cart + reservation enquiry.
2. `templates/05-gold-jewellery-pro` — jewellery catalogue + search/filter + wishlist interaction + consultation enquiry.
3. `templates/06-personal-portfolio-pro` — profile + project search/filter + contact flow.
4. `templates/07-business-pro` — business positioning + solutions + proof + lead form.
5. `templates/08-services-pro` — service catalogue + category filtering + service request flow.
6. `templates/09-small-shop-pro` — product catalogue + search/filter + persistent cart + demo checkout.
7. `templates/10-student-project-pro` — project showcase + search + team + documentation structure.

## Architecture philosophy

Think of every template as a complete body:

- **Skeleton:** folders/files and sections.
- **Blood vessels:** data/state flow.
- **Skin:** HTML/CSS UI.
- **Brain:** JavaScript behavior.
- **Heart:** the core user journey.
- **Tone:** brand copy and visual personality.

## Comments inside code

Templates include comments explaining when a feature is appropriate, what the code is doing, and where a future backend/API should replace demo behavior.

## Production warning

These templates run without a backend so they are easy to learn and prototype. LocalStorage, demo forms and client-side totals are not a secure multi-user production backend. Production systems should add server-side validation, authentication where required, database persistence, rate limiting, secure environment variables, logging, monitoring and appropriate payment/order infrastructure.

## Beginner workflow

1. Copy the closest template.
2. Change its data/config first.
3. Run it in VS Code.
4. Inspect the HTML, CSS and JavaScript.
5. Change one feature at a time.
6. Commit to GitHub.
7. Only introduce Node/Express/database layers when the project actually needs them.

See `docs/PRO-TEMPLATE-MAP.md` for the full upgrade path.