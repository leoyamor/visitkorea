# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## AdSense Launch Checklist

To pass AdSense site review reliably, confirm all items below in production:

1. Set AdSense environment variables in Cloudflare Pages (`Workers & Pages > visitkorea > Settings > Variables and Secrets`)
   - `PUBLIC_ADSENSE_CLIENT_ID` (or `ADSENSE_CLIENT_ID`)
   - Optional slot IDs:
     - `PUBLIC_ADSENSE_SLOT_LEAF_AFTER_INTRO`
     - `PUBLIC_ADSENSE_SLOT_LEAF_MID_CONTENT`
     - `PUBLIC_ADSENSE_SLOT_LEAF_END_CONTENT`
2. Deploy latest `main` branch.
3. Verify script is present on home page source:
   - `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-...`
4. Verify `ads.txt` is valid:
   - `https://planmykorea.com/ads.txt`
   - expected: `google.com, pub-XXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`
5. Verify canonical and redirects:
   - Canonical: `https://planmykorea.com/`
   - `https://www.planmykorea.com/*` -> `https://planmykorea.com/*` (301)
   - `https://visitkorea.pages.dev/*` -> `https://planmykorea.com/*` (301)
