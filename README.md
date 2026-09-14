# Juan Ignacio Bellavitis — Portfolio

Personal portfolio for Juan Ignacio Bellavitis, Senior Full Stack Software Engineer. Live at [juanbellavitis-portfolio.vercel.app](https://juanbellavitis-portfolio.vercel.app).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Animation | Motion (Framer Motion successor) |
| i18n | i18next + react-i18next (EN / DE) |
| Email | Resend + React Email |
| Deployment | Vercel |

## Features

- **Case studies** — dedicated `/work/[slug]` pages statically generated at build time
- **Bilingual** — English and German, switchable at runtime
- **Dark mode** — system preference detected on first paint (no flash)
- **SEO** — Open Graph image (generated via `next/og`), sitemap, robots.txt, JSON-LD structured data
- **Contact form** — server action backed by Resend

## Development

```bash
npm install
npm run dev
```

Requires **Node.js ≥ 20**.

### Environment variables

Create a `.env.local` file:

```
RESEND_API_KEY=re_...
```

## Project structure

```
app/
  page.tsx              # Home (RSC)
  layout.tsx            # Root layout — metadata, theme, i18n
  sitemap.ts            # /sitemap.xml
  robots.ts             # /robots.txt
  opengraph-image.tsx   # Dynamic OG image (1200×630)
  work/[slug]/
    page.tsx            # Case study page (SSG)
    components.tsx      # SectionBlock, Chip
components/             # Client components (Header, About, Skills…)
lib/
  data.ts               # Navigation links, experience, skills (EN)
  dataDe.ts             # Navigation links, experience (DE)
  work.ts               # Case study data + types
  language.ts           # i18next configuration
context/                # ThemeContext, ActiveSectionContext
actions/
  SendEmail.ts          # Contact form server action
```

## Deployment

Deployed on Vercel. Every push to `master` triggers a production deployment automatically. Feature work is done on separate branches and merged via pull request.
