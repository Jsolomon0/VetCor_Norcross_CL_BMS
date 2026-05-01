## Vercel Deployment

This repository contains multiple apps. Vercel must not build the GitHub repository root.

Create separate Vercel projects with these root directories:

- `codex_bms/apps/website`
- `codex_bms/apps/dashboard`
- `codex_bms/apps/portal`

Each app now contains its own:

- `package.json`
- `next.config.mjs`
- `tsconfig.json`
- `next-env.d.ts`

Vercel project settings for each Next.js app should stay on the standard framework path:

- `Framework Preset`: `Next.js`
- `Root Directory`: the app directory for that project, for example `codex_bms/apps/website`
- `Build Command`: leave the default Next.js behavior in place, or use `npm run build`
- `Output Directory`: leave this empty or unset

Do not set `Output Directory` to `public`. That setting is for static sites and will cause Vercel to fail after a successful Next.js build because the app correctly emits `.next`, not a `public` build artifact.

Notes:

- The web apps import shared source from `codex_bms/packages`, so `externalDir` and `outputFileTracingRoot` are enabled in each Next config.
- `dashboard` and `portal` include Next middleware wrappers around the existing path-access rules.
- The current shell uses demo-role middleware inputs until full session-backed auth is wired into Next request handling.

Suggested environment variables:

- `PORTAL_DEMO_ROLE`
- `DASHBOARD_DEMO_ROLE`

For the public website project, no special role env var is required.
