# Grow Your Channel Faster — static site

Plain HTML/CSS/JS. No build step.

## Deploy to Vercel
- Dashboard: Add New → Project → upload/import this folder. Framework preset: **Other**. Build command: none. Output directory: `.` (root).
- CLI: `npm i -g vercel && vercel --prod` from this folder.

## Local preview
`npx serve .` then open the printed URL.

## Notes
- AI tools run in **demo mode** (template output) here. Live AI needs a server-side proxy to an AI provider with the API key in an environment variable — never put keys in front-end code.
- Auth, favorites and history are stored in the browser (localStorage) only. Not production authentication.
- Pricing buttons are a demo; no payments are processed.
- Before launch, replace `YOUR-DOMAIN.vercel.app` in `robots.txt` and `sitemap.xml` with your real domain.
