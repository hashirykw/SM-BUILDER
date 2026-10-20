# S. M. Builders & Developers — website

Website for S. M. Builders & Developers (S. M. Group, since 1967), Karachi: Burj Al Jinnah, S. M. House and S. M. Axis.

## Pages

| File | Page |
|---|---|
| `index.html` | Home: "1967" intro, S. M. Axis drawn floor by floor, landmarks, drive times, interiors ring, materials, news, enquiry |
| `projects.html` | All three projects, filters and a side-by-side comparison |
| `project.html?p=<slug>` | One page per project (`burj-al-jinnah`, `sm-house`, `sm-axis`): gallery, highlights, amenities, zoomable floor plans, payment calculator, videos, progress, map, enquiry |
| `floor-plans.html` | Every published floor plan with zoom/pan, and unit sizes |
| `about.html` | Story, vision, values, milestones, ventures, affiliations, downloads |
| `news.html` | News & updates with filters and detail popups |
| `contact.html` | Phone lines, three offices with maps, WhatsApp form, FAQ |

Each page is one self-contained HTML file with its CSS and JavaScript inlined. Deploy the repo root as-is (Vercel preset "Other", or GitHub Pages).

Enquiry forms open WhatsApp to the sales line 0315-3002144 with the visitor's details filled in.

## Images

Every photo, render and floor plan comes from smbuilders.com.pk and is stored in `images/`. Each `<img>` falls back to the original address if a local copy is missing. To re-copy (e.g. after adding images to `source/data.js`), run `node source/images_list.js`, push, and the **Copy images into the repo** workflow downloads anything new.

`images/ui/` holds the gold logo cut out of the green original, the favicon, and clean crops of the Burj Al Jinnah and S. M. Axis renders.

## Editing

The pages are generated from `source/`:

- `source/data.js` — projects, plans, payment terms, news, contacts, FAQ. Every fact is taken from the client's site and published flyers.
- `source/shared.css` — design system (gold on bottle green, dark and light themes).
- `source/engine.js` — shared behaviour: particle background, the S. M. Axis tower drawn in SVG, smooth scrolling, lightbox, plan viewer, assistant, forms.
- `source/pages/*.page` — each page's own layout and script.

After editing, run `python3 source/build.py` from the repo root.

## To confirm with the client

- WhatsApp number for enquiries (currently sales line 0315-3002144).
- S. M. Axis unit mix: the website says 3-bed, while the 360° tour poster says "1, 1.5, 2 BHK homes & showrooms".
- S. M. House rates are the published floor-wise gross rates; confirm they're still current.
