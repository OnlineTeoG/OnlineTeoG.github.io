/* =========================================================
   main.js
   Shared behavior: nav toggle + active link, project card
   rendering, category filtering, and the project.html
   detail-page renderer (reads ?slug= from the URL).
   ========================================================= */

function categoryLabel(id) {
  const found = CATEGORIES.find((c) => c.id === id);
  return found ? found.label : id;
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Highlight the current page in the nav
  const current = document.body.getAttribute("data-page");
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("data-page") === current) a.classList.add("active");
  });
}

function cardMediaHTML(project) {
  if (project.images && project.images.length > 0) {
    return `<img src="${project.images[0]}" alt="${project.title}" loading="lazy">`;
  }
  return `<div class="no-image">Image pending</div>`;
}

function projectCardHTML(project) {
  const chips = (project.tools || [])
    .slice(0, 3)
    .map((t) => `<span class="chip">${t}</span>`)
    .join("");
  const draftFlag = project.needsDetail
    ? `<span class="draft-flag">DRAFT</span>`
    : "";
  return `
    <a class="card-link" href="project.html?slug=${project.slug}">
      <article class="project-card">
        <div class="card-media">${cardMediaHTML(project)}</div>
        <div class="card-tag-strip">
          <span>${categoryLabel(project.category)}</span>
          <span>${project.date || ""}</span>
        </div>
        <div class="card-body">
          <h3>${project.title} ${draftFlag}</h3>
          <p>${project.summary}</p>
          <div class="chip-row">${chips}</div>
        </div>
      </article>
    </a>
  `;
}

function renderGrid(containerId, projects) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!projects.length) {
    el.innerHTML = `<div class="empty-state">No projects in this category yet</div>`;
    return;
  }
  el.innerHTML = projects.map(projectCardHTML).join("");
}

/* ---------- index.html: featured projects ---------- */

function initFeaturedGrid() {
  const el = document.getElementById("featured-grid");
  if (!el) return;
  const featured = PROJECTS.filter((p) => p.featured);
  renderGrid("featured-grid", featured);
}

/* ---------- projects.html: full grid + category filters ---------- */

function initProjectsPage() {
  const grid = document.getElementById("project-grid");
  const filterRow = document.getElementById("filter-row");
  if (!grid || !filterRow) return;

  const allBtn = `<button class="filter-btn active" data-category="all">All</button>`;
  const categoryBtns = CATEGORIES.map(
    (c) => `<button class="filter-btn" data-category="${c.id}">${c.label}</button>`
  ).join("");
  filterRow.innerHTML = allBtn + categoryBtns;

  function applyFilter(categoryId) {
    const filtered =
      categoryId === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === categoryId);
    renderGrid("project-grid", filtered);
  }

  filterRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterRow
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyFilter(btn.getAttribute("data-category"));
  });

  // Support linking straight to a filtered view: projects.html?category=lego
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category") || "all";
  const initialBtn = filterRow.querySelector(
    `[data-category="${initialCategory}"]`
  );
  if (initialBtn) {
    filterRow
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    initialBtn.classList.add("active");
  }
  applyFilter(initialCategory);
}

/* ---------- project.html: single project detail ---------- */

function initProjectDetail() {
  const container = document.getElementById("project-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    container.innerHTML = `
      <div class="empty-state">
        Project not found. <a href="projects.html">Back to all projects</a>
      </div>`;
    document.title = "Project not found — Matteo Giovanardi";
    return;
  }

  document.title = `${project.title} — Matteo Giovanardi`;

  const mainImage =
    project.images && project.images.length > 0
      ? `<div class="detail-media"><img id="detail-main-img" src="${project.images[0]}" alt="${project.title}"></div>`
      : `<div class="detail-media"><div class="card-media" style="aspect-ratio:16/10;"><div class="no-image">Image pending</div></div></div>`;

  const thumbs =
    project.images && project.images.length > 1
      ? `<div class="detail-media-thumbs">${project.images
          .map(
            (src) =>
              `<img src="${src}" alt="" onclick="document.getElementById('detail-main-img').src='${src}'">`
          )
          .join("")}</div>`
      : "";

  const paragraphs = project.description.map((p) => `<p>${p}</p>`).join("");

  const toolChips = (project.tools || [])
    .map((t) => `<span class="chip">${t}</span>`)
    .join("");

  const links = project.links || {};
  const linkRows = Object.keys(links)
    .map(
      (key) =>
        `<a href="${links[key]}" target="_blank" rel="noopener">${
          key.charAt(0).toUpperCase() + key.slice(1)
        } ↗</a>`
    )
    .join("");

  container.innerHTML = `
    <div class="detail-header">
      <div class="wrap">
        <a class="back-link" href="projects.html">&larr; All Projects</a>
        <div class="eyebrow">${categoryLabel(project.category)} · ${
    project.date || ""
  }</div>
        <h1>${project.title}</h1>
      </div>
    </div>
    <div class="wrap detail-layout">
      <div class="detail-main">
        ${mainImage}
        ${thumbs}
        <div class="detail-body" style="margin-top:28px;">${paragraphs}</div>
      </div>
      <aside class="spec-sheet">
        <div class="spec-title">Spec Sheet</div>
        <div class="spec-row">
          <div class="label">Category</div>
          <div class="val">${categoryLabel(project.category)}</div>
        </div>
        <div class="spec-row">
          <div class="label">Date</div>
          <div class="val">${project.date || "—"}</div>
        </div>
        <div class="spec-row">
          <div class="label">Tools &amp; Skills</div>
          <div class="chip-row">${toolChips || "—"}</div>
        </div>
        ${
          linkRows
            ? `<div class="spec-row"><div class="label">Links</div><div class="spec-links">${linkRows}</div></div>`
            : ""
        }
      </aside>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFeaturedGrid();
  initProjectsPage();
  initProjectDetail();
});
