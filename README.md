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
- [x] Phone and city filled in ((613) 854-8548, Ottawa, Canada); email set to
      hello@coleassessment.ca pending real inbox/forwarding setup — see note below
- [ ] Social links (LinkedIn, Instagram, X) — footer (all pages) and `contact.html`
- [ ] Stats on the home page (`120+`, `18`, `94%`, `12+`) — replace with real figures
- [ ] Case studies on `index.html` and `work.html` — client names, categories, years, summaries
- [ ] Testimonial quote and attribution on `work.html`
- [ ] Perspectives / article titles on `index.html`
- [ ] Service descriptions and bullet lists on `services.html`
- [ ] All placeholder photography (see above)
- [ ] `robots.txt` sitemap URL and any canonical domain references once you have one
- [ ] Footer credit line ("Site by [Your Name]")

## Email setup (action needed)

The site displays `hello@coleassessment.ca` — using **coleassessment.ca**
(your live, registered domain at Hover) rather than the earlier placeholder
`coleconsultingsolutions.com`, which isn't a domain you own and so could
never actually receive mail. This address won't work until you set up
forwarding, since Hover doesn't create an inbox automatically:

1. Log in to Hover → your domain → **Email** tab.
2. Add an email forward: `hello@coleassessment.ca` → `barbaramcole@icloud.com`.
   (Hover's free tier includes a limited number of forwarding addresses;
   check your plan if it asks you to upgrade.)
3. Save. Forwarding is usually active within a few minutes.

I can't do this step myself — it requires signing in to your Hover account.

## Brand taglines

Short positioning statements drafted for this site. Some are already placed;
the rest are a reserve bank — swap any of them into a lede, footer line, or
new section as the site evolves.

**Currently in use:**
- Footer mission line (all pages) — "Complex problems. Clear solutions."
- Homepage positioning statement — "Solutions for a changing world. Bringing
  together human expertise, technology and innovative thinking to solve
  complex organizational and business challenges."
- Homepage Perspectives intro — "Insight that drives better decisions."
- Homepage "How We Operate" intro (`about.html`) — "Clarity in complexity.
  Solutions that work."
- Services "Engagement models" intro (`services.html`) — "Making complexity
  work for you."
- Contact page hero — "Connecting insight to action."
- Contact page brand-banner caption — "Solutions built around what matters."
- Work page hero — "Better insight. Smarter solutions."
- Work page tools intro — "Strategic thinking. Practical solutions."

**In reserve (not yet placed):**
- From complexity to clarity.
- Insight. Innovation. Solutions.
- Where complexity meets clarity.

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge). Uses CSS Grid,
`clamp()`, `aspect-ratio`, and `IntersectionObserver` — all broadly supported.
