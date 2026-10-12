# ernesto-ramirez-ee.github.io

Personal engineering portfolio. Static HTML/CSS/JS served with GitHub Pages; no build step.

Live: https://ernesto-ramirez-ee.github.io

## Structure

```
index.html              home page
assets/
  css/style.css         styles (theme variables at top)
  js/projects.js        project list
  js/site.js            renders cards and shared project-page layout
projects/
  <slug>/index.html     project write-up
  <slug>/*              project images and media
  _template/            starter page for new projects
```

Project metadata (title, summary, tags, dates, GitHub repository name, display order) lives in `assets/js/projects.js`. `site.js` uses it to build the home page cards and, on each project page, the nav, header, GitHub link, next-project link and footer. Project pages only contain their stats and body content.

## Adding a project

1. Copy `projects/_template` to `projects/<slug>`.
2. Add an entry to `assets/js/projects.js` with the same `slug`.
3. Set `data-project="<slug>"` in the new page and write the content.

The card uses `projects/<slug>/thumb.jpg` (16:9). `repo` is the repository name under github.com/ernesto-ramirez-ee; leave it empty to hide the GitHub links. With no repo, an optional `codeNote` is shown in their place.

## Related

Each project's source lives in its own repository under https://github.com/ernesto-ramirez-ee.
