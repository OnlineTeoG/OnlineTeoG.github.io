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

function tagLabel(id) {
  const found = (typeof TAGS !== "undefined" ? TAGS : []).find((t) => t.id === id);
  return found ? found.label : id;
}

// Images may be plain strings or { src, caption } objects. Normalize.
function normImage(img) {
  return typeof img === "string" ? { src: img, caption: "" } : img;
}
function projectImages(project) {
  return (project.images || []).map(normImage);
}
function projectReferences(project) {
  return (project.references || []).map(normImage);
}
// Videos: { src, poster, caption } objects (or plain src strings).
function projectVideos(project) {
  return (project.videos || []).map(normImage);
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
  const imgs = projectImages(project);
  if (imgs.length > 0) {
    return `<img src="${imgs[0].src}" alt="${project.title}" loading="lazy">`;
  }
  return `<div class="no-image">Image pending</div>`;
}

function projectCardHTML(project) {
  const tagChips = (project.tags || [])
    .map((t) => `<span class="tag-chip">${tagLabel(t)}</span>`)
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
          <div class="tag-row">${tagChips}</div>
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

  // Only show filter buttons for tags that at least one project actually uses,
  // preserving the display order defined in TAGS.
  const usedTags = new Set();
  PROJECTS.forEach((p) => (p.tags || []).forEach((t) => usedTags.add(t)));
  const orderedTags = TAGS.filter((t) => usedTags.has(t.id));

  const allBtn = `<button class="filter-btn active" data-tag="all">All</button>`;
  const tagBtns = orderedTags
    .map((t) => `<button class="filter-btn" data-tag="${t.id}">${t.label}</button>`)
    .join("");
  filterRow.innerHTML = allBtn + tagBtns;

  function setActive(tagId) {
    filterRow
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.toggle("active", b.getAttribute("data-tag") === tagId));
  }

  function applyFilter(tagId) {
    const filtered =
      tagId === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => (p.tags || []).includes(tagId));
    renderGrid("project-grid", filtered);
  }

  filterRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const tagId = btn.getAttribute("data-tag");
    setActive(tagId);
    applyFilter(tagId);
    history.replaceState(null, "", tagId === "all" ? "projects.html" : `?tag=${tagId}`);
  });

  // Support linking straight to a filtered view: projects.html?tag=star-wars
  const params = new URLSearchParams(window.location.search);
  const initialTag = params.get("tag") || "all";
  const hasInitial = initialTag === "all" || orderedTags.some((t) => t.id === initialTag);
  const tagToUse = hasInitial ? initialTag : "all";
  setActive(tagToUse);
  applyFilter(tagToUse);
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

  const buildImgs = projectImages(project);
  const refs = projectReferences(project);
  const hasBuild = buildImgs.length > 0;
  const main = hasBuild ? buildImgs[0] : null;

  const mainFigure = hasBuild
    ? `<figure class="media-figure">
         <img id="detail-main-img" src="${main.src}" alt="${project.title}">
         <figcaption id="detail-main-cap">${main.caption || ""}</figcaption>
       </figure>`
    : `<div class="card-media" style="aspect-ratio:16/10;"><div class="no-image">Image pending</div></div>`;

  const refFigures = refs
    .map(
      (r) => `<figure class="media-figure reference">
         <span class="reference-badge">Reference</span>
         <img src="${r.src}" alt="reference photo">
         <figcaption>${r.caption || "Reference"}</figcaption>
       </figure>`
    )
    .join("");

  const mainImage = refs.length
    ? `<div class="detail-compare">${mainFigure}${refFigures}</div>`
    : `<div class="detail-media">${mainFigure}</div>`;

  const thumbs =
    buildImgs.length > 1
      ? `<div class="detail-media-thumbs">${buildImgs
          .map(
            (im) =>
              `<img src="${im.src}" alt="" data-cap="${(im.caption || "").replace(/"/g, "&quot;")}" onclick="var m=document.getElementById('detail-main-img');m.src='${im.src}';var c=document.getElementById('detail-main-cap');if(c)c.textContent=this.getAttribute('data-cap');">`
          )
          .join("")}</div>`
      : "";

  const vids = projectVideos(project);
  const videoBlock = vids.length
    ? `<div class="detail-videos">${vids
        .map(
          (v) => `<figure class="media-figure video">
         <video src="${v.src}"${v.poster ? ` poster="${v.poster}"` : ""} controls muted playsinline preload="metadata"></video>
         <figcaption>${v.caption || ""}</figcaption>
       </figure>`
        )
        .join("")}</div>`
    : "";

  const paragraphs = project.description.map((p) => `<p>${p}</p>`).join("");

  const toolChips = (project.tools || [])
    .map((t) => `<span class="chip">${t}</span>`)
    .join("");

  const tagLinks = (project.tags || [])
    .map(
      (t) =>
        `<a class="tag-chip" href="projects.html?tag=${t}">${tagLabel(t)}</a>`
    )
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
        ${videoBlock}
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
          tagLinks
            ? `<div class="spec-row"><div class="label">Tags</div><div class="tag-row">${tagLinks}</div></div>`
            : ""
        }
        ${
          linkRows
            ? `<div class="spec-row"><div class="label">Links</div><div class="spec-links">${linkRows}</div></div>`
            : ""
        }
      </aside>
    </div>
  `;
}

/* ---------- about.html: section tabs ---------- */

function initAboutTabs() {
  const tabRow = document.getElementById("about-tabs");
  if (!tabRow) return;

  const buttons = Array.from(tabRow.querySelectorAll(".tab-btn"));
  const panels = Array.from(document.querySelectorAll("[data-tab-panel]"));

  function show(name) {
    const target = panels.find((p) => p.getAttribute("data-tab-panel") === name);
    if (!target) return false;

    panels.forEach((p) => {
      p.hidden = p !== target;
    });
    buttons.forEach((b) => {
      const on = b.getAttribute("data-tab") === name;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    return true;
  }

  tabRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    const name = btn.getAttribute("data-tab");
    if (show(name)) {
      // Shareable URL, without stacking a history entry per click
      history.replaceState(null, "", `?tab=${name}`);
    }
  });

  // Left/right arrows move between tabs, as a tablist should
  tabRow.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const i = buttons.findIndex((b) => b.classList.contains("active"));
    if (i === -1) return;
    const step = e.key === "ArrowRight" ? 1 : -1;
    const next = buttons[(i + step + buttons.length) % buttons.length];
    next.click();
    next.focus();
    e.preventDefault();
  });

  // Link straight to a tab: about.html?tab=wasps (or #wasps)
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("tab") || window.location.hash.replace("#", "");
  if (!requested || !show(requested)) show("experience");
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFeaturedGrid();
  initProjectsPage();
  initProjectDetail();
  initAboutTabs();
});
