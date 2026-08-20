# Matteo Giovanardi — Portfolio

Plain HTML/CSS/JS portfolio site. No build step, no framework — every file
here can be opened in a browser or pushed straight to any static host.

## Structure

```
index.html            Home page (hero + featured projects)
projects.html          Full project catalog with category filters
project.html            Reusable template — renders one project based on ?slug=
about.html              Bio, education/experience timeline, skills
contact.html            Contact info + résumé download
css/styles.css          All styling (one file, uses CSS variables)
js/projects-data.js     ALL project content lives here
js/main.js               Rendering logic (grid, filters, detail page)
assets/images/           Project photos, one subfolder per project
assets/docs/             Résumé (PDF + original DOCX)
```

## Adding a new project (no HTML editing needed)

1. Drop the photo(s) in a new folder under `assets/images/your-project-slug/`.
2. Open `js/projects-data.js` and add one object to the `PROJECTS` array:

```js
{
  slug: "your-project-slug",              // used in the URL: project.html?slug=your-project-slug
  title: "Project Title",
  category: "design-cad",                 // must match an id in CATEGORIES above
  date: "2026",
  summary: "One sentence for the project card.",
  description: ["First paragraph.", "Second paragraph."],
  tools: ["Onshape", "3D Printing"],
  images: ["assets/images/your-project-slug/photo-1.jpg"],
  links: { github: "https://..." },       // optional — omit keys you don't have
  featured: false,                        // true = also shows on the homepage
}
```

That's it — it will automatically appear on `projects.html`, be filterable by
its category, and get its own detail page at `project.html?slug=your-project-slug`.

To add a whole new category, add `{ id: "...", label: "..." }` to the
`CATEGORIES` array at the top of the same file.

## Running locally

No build tools needed. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. (Opening `index.html` directly by
double-clicking works too, though a local server behaves closer to a real
deployment.)

## Deploying

This repo **is** the live site. Because it's named `OnlineTeoG.github.io` —
matching the account name — GitHub treats it as a Pages **user site**, and
serves whatever is on `main` at:

```
https://onlineteog.github.io
```

To switch it on: **Settings → Pages → Source: Deploy from a branch**, branch
`main`, folder `/ (root)`. The first build takes a minute or two.

There's no build step — Pages serves these files exactly as they are. Every
path in the HTML is relative (`css/styles.css`, `assets/images/...`), so the
site works equally well opened locally or hosted somewhere else entirely.

### Branch workflow

`main` is what's public, so treat it as the deploy branch and do the work on
`dev`:

```bash
git checkout dev
# edit, commit
git push
```

Then open a pull request from `dev` into `main` and merge once it looks right.
The merge is the deploy.

### Custom domain (optional)

The GitHub Student Developer Pack (education.github.com/pack) includes a free
domain — a Namecheap `.me`, or Name.com for other extensions. To use one, add
it under Settings → Pages → Custom domain and point the DNS at GitHub Pages
(apex domains need `A` records; a `www` subdomain needs a `CNAME`). GitHub's
Pages docs list the exact record values.

## Notes / things left to fill in

- The **wind turbine** and **FRC robot** entries are built from résumé facts
  and have no photos yet — both could use specific detail and images.
- The **floatplane** write-up makes some assumptions about the build (the
  bracing on the float pylons, and hinge placement being where the iteration
  went). Correct those to match what actually happened, and add part count and
  build time if you want the concrete numbers in there.
- `contact.html` deliberately omits your home address and phone number. Add
  them back if you want them public.
- No LinkedIn or GitHub links anywhere yet — add contact cards in
  `contact.html`, and a `links` entry per project in `projects-data.js`.
