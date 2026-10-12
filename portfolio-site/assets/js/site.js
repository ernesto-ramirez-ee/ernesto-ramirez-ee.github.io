/* ================================================================
   Shared site behavior. You normally don't need to edit this file.
   - Home page: builds the project cards from assets/js/projects.js
   - Project pages: adds the menu, title block, GitHub button,
     next/previous links and footer from the matching entry
   ================================================================ */
(function () {
  var SITE = {
    name: "Ernesto Ramirez",
    email: "ernesto.ramirez.contact@gmail.com",
    linkedin: "https://www.linkedin.com/in/ernesto-ramirez-3111a3294",
    github: "https://github.com/ernesto-ramirez-ee",
    codeRepo: "https://github.com/ernesto-ramirez-ee/"
  };

  var PROJECTS = window.PROJECTS || [];
  var body = document.body;
  var root = body.getAttribute("data-root") || "";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function tagsHTML(tags) {
    return '<div class="tags">' + (tags || []).map(function (t) {
      return '<span class="tag">' + esc(t) + "</span>";
    }).join("") + "</div>";
  }
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  // ---------- home page: project cards ----------
  var grid = document.getElementById("project-cards");
  if (grid) {
    grid.innerHTML = PROJECTS.map(function (p) {
      var dir = "projects/" + p.slug + "/";
      return '<a class="card" href="' + dir + 'index.html">' +
        '<img class="thumb" src="' + dir + esc(p.thumb || "thumb.jpg") + '" alt="' + esc(p.title) + '" data-ph="Card thumbnail (16:9)">' +
        '<div class="body">' +
          '<p class="metric">' + esc(p.kind) + "</p>" +
          "<h3>" + esc(p.title) + "</h3>" +
          "<p>" + esc(p.summary) + "</p>" +
          (p.highlight ? '<p class="metric">' + esc(p.highlight) + "</p>" : "") +
          tagsHTML(p.tags) +
        "</div></a>";
    }).join("");
  }

  // ---------- project pages ----------
  var slug = body.getAttribute("data-project");
  var main = document.querySelector("main");
  if (slug && main) {
    var i = -1;
    PROJECTS.forEach(function (p, k) { if (p.slug === slug) i = k; });
    var p = PROJECTS[i];

    body.insertBefore(el(
      '<nav class="nav"><div class="wrap">' +
        '<a class="brand" href="' + root + 'index.html">ernesto<span>.</span>ramirez</a>' +
        '<ul><li><a href="' + root + 'index.html#projects">Projects</a></li>' +
        '<li class="hide-sm"><a href="' + root + 'index.html#experience">Experience</a></li>' +
        '<li><a href="' + root + 'index.html#contact">Contact</a></li></ul>' +
      "</div></nav>"), body.firstChild);

    if (!p) {
      main.insertBefore(el('<p class="todo">No entry with slug "' + esc(slug) +
        '" in assets/js/projects.js. Add one, or fix data-project on this page.</p>'), main.firstChild);
    } else {
      document.title = p.title + " | " + SITE.name;
      var code = p.repo
        ? '<div class="btns" style="margin-top:20px"><a class="btn primary" href="' + SITE.codeRepo + esc(p.repo) +
          '" target="_blank" rel="noopener">View code &amp; files on GitHub →</a></div>'
        : "";
      main.insertBefore(el(
        '<header class="project-hero">' +
          '<a class="back" href="' + root + 'index.html#projects">← All projects</a>' +
          "<h1>" + esc(p.title) + "</h1>" +
          '<p class="lede">' + esc(p.intro || p.summary) + "</p>" +
          '<div class="meta">' + (p.meta || []).map(function (m) {
            return "<span>" + esc(m[0]) + ": <b>" + esc(m[1]) + "</b></span>";
          }).join("") + "</div>" +
          tagsHTML(p.tags) + code +
        "</header>"), main.firstChild);

      var next = PROJECTS[i + 1];
      main.appendChild(el(
        '<div class="next">' +
          '<a href="' + root + 'index.html#projects">← All projects</a>' +
          (p.repo ? '<a href="' + SITE.codeRepo + esc(p.repo) + '" target="_blank" rel="noopener">Code on GitHub ↗</a>' : "") +
          (next
            ? '<a href="' + root + "projects/" + next.slug + '/index.html">Next project →</a>'
            : '<a href="' + root + 'index.html#contact">Get in touch →</a>') +
        "</div>"));
    }

    body.insertBefore(el(
      '<footer><div class="wrap">' +
        "<span>© " + new Date().getFullYear() + " " + SITE.name + "</span>" +
        '<span><a href="mailto:' + SITE.email + '">Email</a> · <a href="' + SITE.linkedin +
        '">LinkedIn</a> · <a href="' + SITE.github + '">GitHub</a></span>' +
      "</div></footer>"), main.nextSibling);
  }

  // ---------- missing images show a labeled placeholder ----------
  document.querySelectorAll("img[data-ph]").forEach(function (img) {
    function swap() {
      var box = document.createElement("div");
      box.className = "ph " + (img.className || "");
      box.innerHTML = "<span>" + esc(img.getAttribute("data-ph") || "Add image") +
        "</span><code>" + esc(img.getAttribute("src")) + "</code>";
      img.replaceWith(box);
    }
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap);
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
