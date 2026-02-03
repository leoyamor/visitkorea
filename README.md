# Korea Travel Guide (Next.js)

A mobile-first, AdSense-friendly Korea travel guide built with the Next.js App Router and static export.

## Local Development

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `http://localhost:3000` |
| `npm run build` | Build and export the static site to `./out/` |
| `npm run start` | Start the production server (not used for static export) |

## Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Output directory: `out`

## AdSense

Ad placeholders live in `src/components/AdSlot.tsx`. Replace the placeholder markup with your AdSense code when ready.
