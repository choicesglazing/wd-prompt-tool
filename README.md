# Windows and Doors — Prompt Studio

Internal prompt-generation tool for Windows and Doors. Configure a brief — product, location, scene, people, lived-in realism, target model — and the tool emits a model-specific prompt with negative prompt, parameters, post-production checklist, and (for video) a music brief with library search terms.

Targets: **Midjourney v6.1, Flux, Nano Banana** (image); **Veo 3, Kling** (video).

## Quick start (local)

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The built site is in `dist/`. It's a fully static SPA — no backend, no database.

## Deploy to Netlify

**Option A — drag and drop (fastest):**
1. Run `npm run build` locally
2. Go to https://app.netlify.com/drop
3. Drag the `dist/` folder onto the page
4. Done.

**Option B — Git-connected continuous deployment:**
1. Push this repo to GitHub / GitLab / Bitbucket
2. In Netlify, "Add new site → Import from Git", select the repo
3. Netlify auto-detects the build command from `netlify.toml` (`npm run build`, publish `dist`)
4. Every push to main rebuilds and republishes

## Updating the catalogue

All product data, colours, hardware, housing types, scene presets, music presets and **model syntax** live in **`src/catalogue.js`**.

When manufacturers update their range, models change syntax, or you want to add a new product:

1. Edit `src/catalogue.js`
2. Commit and push (or run `npm run build` and re-drop the `dist/` folder)

The data structures are heavily commented. The most common edits:

- **Adding a new colour to a Deceuninck or Smart range:** add an object to `DECEUNINCK_COLOURS` or `SMART_COLOURS` with `name`, `ral`, `hex`, `finish`.
- **Adding a Comp Door style:** append to `COMPDOOR_STYLES`.
- **Changing model syntax** (e.g. Midjourney v7 launches): edit `MODEL_SYNTAX.midjourney` — change the label, parameter format, optimal prompt length, and notes.
- **Tweaking the lived-in detail rotation:** edit `LIVED_IN_DETAILS` for any scene key. Add or remove items at any of the three levels (subtle/moderate/heavy).
- **Adding a new music preset for a new scene type:** add to `MUSIC_PRESETS`.

## What the tool does for you

- Translates brand names to **visual descriptors** in prompts (the prompt never mentions "Deceuninck" or "Smart" — only the visible characteristics)
- Stacks **anti-uncanny-valley scaffolding** on every prompt that includes people (preserved skin texture, asymmetry, hand positioning, candid framing)
- Modernises ethnically diverse subjects with **contemporary British framing** to avoid stereotyping
- Adds **mobility-aid dignity scaffolding** for older subjects
- Frames **children** appropriately for Veo 3 guardrails (background, motion, behind)
- Matches **housing stock to county** (ironstone in Northants, gault brick in Cambridge, Charnwood granite in Leics, limestone in Lincs, red brick in Beds)
- Injects **rotating UK lived-in domestic detail** (no eucalyptus everywhere — wheelie bins, kettles, coats, mugs, varied)
- **Never injects pets unless explicitly toggled**
- Builds **3 variations** for image briefs (different angles)
- Builds **carousel** with anchor-frame consistency strategy
- Builds **shot-by-shot video lists** for Veo 3 and Kling
- Trims Veo 3 prompts to ~50–70 words per shot
- Generates **music briefs** with specific Epidemic Sound and Artlist search terms
- Builds **post-production checklists** for SF Pro overlay, WD logo placement, brand-colour usage rules
- Soft-flags **suspect combinations** (Aluspace exterior, atmospheric mood with motion, Veo 3 children, Nano Banana atmospheric)

## File structure

```
src/
  catalogue.js     # all product, colour, scene, model data — edit this when manufacturers change
  promptEngine.js  # buildPrompt, buildVariations, buildCarousel, buildVideoShotList
  App.jsx          # main React component — UI for the brief and output
  main.jsx         # React entry
  styles.css       # all styling
index.html         # HTML entry
netlify.toml       # Netlify build config
vite.config.js     # Vite config (uses relative paths so it works on any deploy)
package.json       # dependencies (React 18 + Vite)
```

## Brand rules baked in

- WD primary slate `#465f73`, off-white `#f7f9fa`, near-black `#2c2c2c` — used in graphic overlays and the tool UI
- Peach `#e6b8af` and pink `#ea638c` — sparingly, accents only, never in photographic content
- SF Pro typography in overlays
- WD logo bottom-right at ~8% width with 24px padding

## License

Internal tool — for Windows and Doors team use only.
