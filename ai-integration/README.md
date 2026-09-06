# AI Integration Starter

This folder is intentionally provider-neutral. Add AI only after the basic website works.

## Safe architecture

Browser → your backend API → AI provider → backend response → browser

Do **not** put an AI API key in `index.html`, browser JavaScript, GitHub, or Canva.

## Suggested future features

- Menu assistant: answer questions about available items.
- Business FAQ assistant.
- Natural-language menu search.
- Content generation for descriptions (with human review).
- Analytics summaries after a real backend/database exists.

## Environment variables

Use a local `.env` file for secrets and keep it out of Git with `.gitignore`.

Example names:

`AI_API_KEY=replace-locally`

`AI_MODEL=replace-locally`

Never commit real credentials.
