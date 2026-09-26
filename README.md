# Fauzan Portfolio

Personal portfolio at [prayersrain.cloud](https://prayersrain.cloud), in English (`/`) and Indonesian (`/id`). Next.js App Router, statically exported (`output: "export"`).

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run cv:pdf   # after build: prints /cv and /id/cv to public/fauzan-cv-{en,id}.pdf and copies them into out/
npm run lint
```

`cv:pdf` needs Chrome or Edge installed (set `CHROME_PATH` if it isn't found). Run it whenever CV content changes and commit the PDFs.

## Content

- Profile, summary, skills and testimonial: `src/data/profile.ts`
- Projects and case studies: `src/data/projects.ts` (drives the home grid, `/projects/[slug]`, the CV and the sitemap)
- Experience and education: `src/data/experience.ts`
- Interface text in both languages: `src/lib/i18n.ts`
- Project screenshots: `public/projects/<slug>/`

Every piece of text is a `{ en, id }` pair, so both languages stay in one place.

## Deploy

The live site is served by the `nginx` container of `kmd-system` on the VPS, from `/var/www/uploads/portofolio` (docker volume `kmd-system_shared_uploads`). Deploying means replacing that folder with a fresh `out/` after `npm run build && npm run cv:pdf`. Keep the two older PDFs that live there.
