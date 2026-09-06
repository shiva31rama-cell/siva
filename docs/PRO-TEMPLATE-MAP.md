# PRO TEMPLATE MAP

## The body analogy
- Skeleton = folder/file structure.
- Blood vessels = data flow and state (arrays, localStorage, future APIs).
- Skin = HTML/CSS responsive UI.
- Brain = JavaScript logic and event handling.
- Heart = the main user journey: menu/cart, enquiry, catalogue, portfolio or project flow.
- Tone = brand copy, typography and visual personality.

## How to customize safely
1. Start from the closest template folder.
2. Change the DATA/config constants first.
3. Change text and labels.
4. Replace demo interactions with real APIs only when a backend exists.
5. Keep secrets out of source control.
6. Test mobile, keyboard navigation, empty states and invalid input.

## Production upgrade checklist
- Backend API
- Database
- Authentication/authorization where required
- Server-side validation
- Rate limiting and spam protection
- Secure environment variables
- Logging and monitoring
- Real email/CRM integration
- Payment provider only when legally/technically required
- HTTPS and production deployment

## Important distinction
The templates are deliberately runnable without a backend. LocalStorage and demo handlers are useful for learning and prototypes, but they do not create a real multi-user ordering or commerce system.

## Suggested architecture when a project grows
frontend/
  pages/
  components/
  styles/
  data/
backend/
  routes/
  controllers/
  models/
  middleware/
  services/
shared/
  types/
  constants/

Use this structure after the project becomes large enough to justify it; do not add complexity just because it is possible.