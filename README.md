# Ishaan Tiwari: Portfolio

My personal portfolio site. Plain HTML, CSS and JavaScript, with no build step and no dependencies.

## Files

| File | What it does |
|---|---|
| `index.html` | All the content: intro, projects and contact |
| `styles.css` | All the styling, including dark mode and the phone layout |
| `script.js` | Theme toggle, scroll animation, active nav link, footer year |
| `assets/` | Favicon and project screenshots |

## Run it locally

Double-click `index.html`, or use the VS Code **Live Server** extension so the page reloads every time you save.

## Publish on GitHub Pages

1. Create a new **public** repository on GitHub. Name it `Ish-2601.github.io` and the site lives at
   `https://ish-2601.github.io/`. Any other name, like `portfolio`, gives
   `https://ish-2601.github.io/portfolio/`.
2. Upload everything in this folder (drag the files onto the repository page, or push with git).
   `index.html` must sit at the top level of the repository, not inside a subfolder.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, pick
   **Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
4. Wait a minute or two, then open the address shown on that page.

To update the site later, change the files and upload or push them again.

## Add a project

Copy one whole `<article class="card reveal">…</article>` block in `index.html`, paste it after the
others, and change the text, tags, link and image. Put the screenshot in `assets/`.
