# OCM — igamingtips.org Project Instructions

## Project Overview

Next.js 15 static site for igamingtips.org. Pre-rendered to static HTML at build time via `output: 'export'`. Deployed on Vercel via GitHub push.

---

## Publishing Withdrawal Proofs

### Step 1 — Save the image

Place the image file in:
```
public/proofs/
```

Name it sequentially: `aa.jpeg`, `bb.jpeg`, `cc.jpeg`, `dd.jpeg`, `ee.jpeg` …

### Step 2 — Add the entry to content

Open `content/winning-tips.ts` and append a new object to the `winningProofs` array:

```ts
{
  image: '/proofs/xx.jpeg',       // filename from step 1
  caption: 'Game name withdrawal via Bank Name',
  amount: 'RM X,XXX',
  date: 'DD Mon YYYY',
  ctaUrl: 'https://epicwinslots.com',
},
```

Keep the array ordered newest first (top = most recent date).

### Step 3 — Build and push

```bash
cd D:\AppGallery\Desktop\OCM
npm run build
git add public/proofs/xx.jpeg content/winning-tips.ts
git commit -m "Add proof: RM X,XXX (DD Mon YYYY)"
git push
```

Vercel auto-deploys on push. Live in ~1-2 minutes.

---

## Proofs Grid Behaviour

- **Default view:** 3 proofs shown (the 3 at the top of the `winningProofs` array)
- **See more button:** appears automatically when there are 4+ proofs
- Component: `components/ProofsGrid.tsx`

To change how many show by default, edit `DEFAULT_VISIBLE` in `components/ProofsGrid.tsx`.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Rendering:** Static Site Generation — `output: 'export'`
- **Styling:** Tailwind CSS
- **Content:** Flat TypeScript files in `content/*.ts`
- **Deployment:** Vercel (auto on `git push` to `main`)
- **Repo:** https://github.com/epicseo88-hash/OCM

---

## SSG Rules — Do Not Break

- No `cookies()`, `headers()`, or runtime `searchParams` in server components
- No `fetch(..., { cache: 'no-store' })` or `force-dynamic`
- Dynamic routes must implement `generateStaticParams`
- All data fetched at build time

---

## Before Marking Any Task Done

1. `npm run build` completes with no errors
2. Every route shows `○ (Static)` in the build log
3. Push to GitHub and confirm Vercel deploys successfully
