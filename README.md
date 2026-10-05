# bookxeng.github.io

Personal portfolio of Pongnapat Limmongkolhirun, built with Next.js 14 (App Router), TypeScript and Tailwind CSS, and deployed to GitHub Pages as a static export.

## Development

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
npm run lint
```

## Updating content

All portfolio content (profile, education, experience, projects, skills) lives in typed data in
[`src/data/portfolio.ts`](src/data/portfolio.ts). Edit it there and the sections update automatically.

| Path              | Purpose                                     |
|-------------------|---------------------------------------------|
| `src/app`         | root layout, page, global styles            |
| `src/components`  | one component per section, plus shared UI   |
| `src/data`        | portfolio content and its TypeScript types  |

Pushing to `main` deploys via `.github/workflows/nextjs.yml`.
