# A Little Universe for Alexia Anindi ♡

An interactive birthday website (React + Vite + Framer Motion). Everything you'd want to change lives in **one file**: `src/data/content.js`.

## 1. Run it on your computer
1. Install Node.js (LTS) from https://nodejs.org
2. In this folder run:
   ```
   npm install
   npm run dev
   ```
3. Open the address shown (usually http://localhost:5173).

## 2. Add your photos
Put your photos in `public/images/memories/`. Then in `src/data/content.js` set the `image` field, e.g. `image: 'images/memories/first-date.jpg'` (no leading slash).
- **Add** a memory: copy an object in `gallery` (or `timeline`) and edit it. **Remove**: delete the object. **Reorder**: move the objects around.
- `ratio` in the gallery controls the frame shape: `'3/4'` tall, `'1/1'` square, `'4/3'` wide.
- A pretty placeholder shows automatically until the file exists. Tip: resize photos to about 1600px wide so the page loads fast.

## 3. Add your song
Put an mp3 at `public/audio/our-song.mp3` (or change `music.file` / `music.title` in `content.js`). Music only starts when Alexia taps the play button (browsers block autoplay).

## 4. Edit the words
Poems, the letter, the timeline stories, the "things I love" cards and the closing message are all in `content.js`. The poems and letter are drafts written without any private details; please rewrite them with real memories, they will mean much more.

## 5. Deploy for free

### Option A: Cloudflare Pages (recommended)
1. Create a free account at https://github.com and make a new **repository** (private is fine).
2. Upload this project (without `node_modules`). With Git:
   ```
   git init && git add . && git commit -m "first version"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/alexia-universe.git
   git push -u origin main
   ```
3. Create a free account at https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, and choose your repository.
4. Settings: **Framework preset:** Vite · **Build command:** `npm run build` · **Build output directory:** `dist`. Click **Save and Deploy**.
5. After about a minute you get a free link like `https://alexia-universe.pages.dev`. Send it to her!

**Redeploy after changes:** edit files, then `git add . && git commit -m "update" && git push`. Cloudflare rebuilds automatically within a minute or two. (On GitHub's website you can also upload or edit files directly in the repository.)

### Option B: GitHub Pages
1. Build locally: `npm run build`. 2. Push the project to GitHub. 3. Easiest route: in the repo, **Settings → Pages**, choose **GitHub Actions** and use the "Static HTML / Vite" starter workflow, or publish the `dist` folder to a `gh-pages` branch. Asset paths already work in sub-folders because `vite.config.js` uses `base: './'`.

## Project structure
```
public/images/memories/   your photos
public/audio/             your song
src/data/content.js       ALL editable text and file names
src/components/           Opening, Nav, Gallery, Sections, Music, Extras
src/styles.css            colours, fonts, layout
```
Colours are CSS variables at the top of `src/styles.css`.
