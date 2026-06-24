# Jason De Leon — Portfolio

A single-page portfolio reconstructed as a **React + TypeScript + Vite** site with **Tailwind CSS v4**.
Originally built in Lovable; rebuilt here as a clean, dependency-light, GitHub-Pages-deployable project.

## Stack

- **Vite 6** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS v4** via `@tailwindcss/vite` (design tokens in `src/index.css`)
- No router — one page with in-page `#anchor` navigation and smooth scroll
- Content lives in `src/data/content.ts`; layout in `src/components/*`

## Project structure

```
public/
  jason-deleon.jpg          # hero portrait (the provided headshot)
  jdeleon-2026-resume.pdf   # linked from the Résumé section's "Download PDF"
src/
  components/  Header, Hero, Work, Resume, Footer
  data/content.ts           # all copy, projects, experience, links
  App.tsx  main.tsx  index.css
```

## Develop

```bash
npm install
npm run dev        # opens http://localhost:5173/
```

## Build & preview

```bash
npm run build      # type-checks (tsc -b) then builds to dist/
npm run preview    # serves the production build locally
```

## Deploy to GitHub Pages

This repo is the **user site** `jSwAggy01.github.io`, served at the root, so `base` is `"/"`
(set in `vite.config.ts`). The included `.github/workflows/deploy.yml` builds and publishes on
every push to `main`.

1. **Push to GitHub** on the `main` branch (already wired to `origin`).
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. The workflow runs automatically; the site goes live at **https://jswaggy01.github.io/**.

### Custom domain (optional, later)
Because `base` is `"/"`, adding a custom domain (e.g., `jasondeleon.dev`) needs no code change:
add the domain under **Settings → Pages → Custom domain**, create a `public/CNAME` file containing
the domain, and point your DNS at GitHub Pages.

> Manual alternative: run `npm run build` and publish the `dist/` folder.

## Notes

- The hero portrait at `public/jason-deleon.jpg` is the provided headshot (2400×3000, 4:5) — replace
  the file in place to swap it; no code change needed.
- All Lovable-specific scaffolding (edit badge, `cdn.gpteng.co` fonts/scripts, `/__l5e/` tracking,
  TanStack Router SSR) has been removed.
