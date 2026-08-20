# Cole Consulting & Solutions — Website

A static, five-page marketing site for Cole Consulting & Solutions. Pure HTML/CSS/JS —
no build step, no dependencies, ready to push to GitHub and host on Netlify.

## File structure

```
Cole Consulting/            (repo folder name)
├── index.html          Home
├── about.html           About / founder / principles
├── services.html        Services detail (4 disciplines)
├── work.html             Selected work / case studies
├── contact.html          Contact page + Netlify-powered form
├── 404.html               Not-found page
├── css/style.css          All styles (design tokens at the top)
├── js/main.js             Nav, scroll reveal, counters, marquee
├── assets/favicon.svg     Site icon
├── netlify.toml            Netlify config
└── robots.txt
```

## Previewing locally

No build tools needed. Easiest option — from this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. (Opening the HTML files
directly by double-clicking will mostly work too, but a local server avoids
occasional relative-path quirks.)

## Deploying

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. **Connect to Netlify**
   - In Netlify: *Add new site → Import an existing project → GitHub* → select this repo.
   - Build command: leave blank. Publish directory: `.` (already set in `netlify.toml`).
   - Deploy. Netlify will detect the contact form automatically (see below).
3. **Contact form** — the form on `contact.html` uses Netlify Forms
   (`data-netlify="true"`). Once deployed, submissions show up under
   **Site settings → Forms** in your Netlify dashboard. No backend needed.
   You can add an email notification under *Forms → Settings and usage →
   Form notifications*.
4. **Custom domain** — once you have one, add it under *Domain settings* in Netlify.

## Design system

- **Colors** — monochrome (white / off-white / charcoal / black) plus one
  electric-green accent (`--green` in `css/style.css`). All tokens are
  defined at the top of that file — change them there to re-theme the site.
- **Type** — Archivo (display/headlines) + Inter (body), loaded from Google Fonts.
- **Grid** — a 12-column editorial grid (`.grid-12` / `.span-*` classes).
- **Motion** — subtle scroll reveals, image scale-on-hover, a marquee strip,
  and animated counters. All handled in `js/main.js`, no libraries.

## Placeholder photography

Every photo on the site is a placeholder sourced from Lorem Picsum
(`picsum.photos`), styled with a grayscale/duotone CSS filter so it matches
the monochrome + green system regardless of the source image. **Replace
these with real photography before launch** — swap the `src` on each
`<img>` tag inside a `.media` block with your own image path (e.g.
`assets/photos/hero.jpg`).

## Placeholder checklist

Search each file for text in `[brackets]` — that's everything left for you
to fill in. The major items:

- [ ] Company tagline / hero copy (currently drafted, feel free to keep or rewrite)
- [x] Founder name, title, and bio — `about.html` (Barbara Cole's bio is filled in)
- [ ] Email, phone, and office address — footer (all pages) and `contact.html`
- [ ] Social links (LinkedIn, Instagram, X) — footer (all pages) and `contact.html`
- [ ] Stats on the home page (`120+`, `18`, `94%`, `12+`) — replace with real figures
- [ ] Case studies on `index.html` and `work.html` — client names, categories, years, summaries
- [ ] Testimonial quote and attribution on `work.html`
- [ ] Perspectives / article titles on `index.html`
- [ ] Service descriptions and bullet lists on `services.html`
- [ ] All placeholder photography (see above)
- [ ] `robots.txt` sitemap URL and any canonical domain references once you have one
- [ ] Footer credit line ("Site by [Your Name]")

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge). Uses CSS Grid,
`clamp()`, `aspect-ratio`, and `IntersectionObserver` — all broadly supported.
