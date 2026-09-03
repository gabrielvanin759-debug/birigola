const wallpapers = [
  { title: "1", category: "Anime", image: "wallpapers/1.jpeg", resolution: "3840x2160" },
  { title: "2", category: "Anime", image: "wallpapers/2.mp4", resolution: "3840x2160" },
  { title: "3", category: "Anime", image: "wallpapers/3.jpeg", resolution: "2560x1440" },
  { title: "4", category: "Anime", image: "wallpapers/4.mp4", resolution: "3840x2160" },
  { title: "5", category: "Anime", image: "wallpapers/5.jpg", resolution: "3840x2160" },
  { title: "6", category: "Anime", image: "wallpapers/6.mp4", resolution: "3840x2160" },
  { title: "7", category: "Anime", image: "wallpapers/7.gif", resolution: "1920x1080" },
  { title: "8", category: "Anime", image: "wallpapers/8.mp4", resolution: "3840x2160" },
  { title: "9", category: "Anime", image: "wallpapers/9.mp4", resolution: "5120x2880" },
  { title: "10", category: "Anime", image: "wallpapers/10.png", resolution: "3840x2160" },
  { title: "11", category: "Anime", image: "wallpapers/11.jpg", resolution: "3840x2160" },
  { title: "12", category: "Anime", image: "wallpapers/12.mp4", resolution: "3840x2160" },
  { title: "13", category: "Anime", image: "wallpapers/13.jpg", resolution: "3840x2160" },
  { title: "14", category: "Anime", image: "wallpapers/14.mp4", resolution: "3840x2160" },
  { title: "15", category: "Anime", image: "wallpapers/15.jpg", resolution: "3840x2160" },
  { title: "16", category: "Anime", image: "wallpapers/16.mp4", resolution: "3840x2160" },
  { title: "17", category: "Anime", image: "wallpapers/17.jpg", resolution: "3840x2160" },
  { title: "18", category: "Anime", image: "wallpapers/18.mp4", resolution: "3840x2160" },
  { title: "19", category: "Anime", image: "wallpapers/19.jpg", resolution: "3840x2160" },
  { title: "20", category: "Anime", image: "wallpapers/20.mp4", resolution: "3840x2160" },
  { title: "21", category: "Anime", image: "wallpapers/21.jpg", resolution: "3840x2160" },
  { title: "22", category: "Anime", image: "wallpapers/22.mp4", resolution: "3840x2160" },
  { title: "23", category: "Anime", image: "wallpapers/23.png", resolution: "2560x1440" },
  { title: "24", category: "Anime", image: "wallpapers/24.jpg", resolution: "3840x2160" },
  { title: "25", category: "Anime", image: "wallpapers/25.jpg", resolution: "3840x2160" },
  { title: "26", category: "Anime", image: "wallpapers/26.jpg", resolution: "3840x2160" },
  { title: "27", category: "Anime", image: "wallpapers/27.png", resolution: "3840x2160" },
  { title: "28", category: "Anime", image: "wallpapers/28.png", resolution: "3840x2160" },
  { title: "29", category: "Anime", image: "wallpapers/29.jpg", resolution: "3840x2160" },
  { title: "30", category: "Anime", image: "wallpapers/30.png", resolution: "3840x2160" },
  { title: "31", category: "Anime", image: "wallpapers/31.jpg", resolution: "3840x2160" },
  { title: "32", category: "Anime", image: "wallpapers/32.jpg", resolution: "3840x2160" },
  { title: "33", category: "Anime", image: "wallpapers/33.jpg", resolution: "3840x2160" },
  { title: "34", category: "Anime", image: "wallpapers/34.jpg", resolution: "3840x2160" },
  { title: "35", category: "Anime", image: "wallpapers/35.jpg", resolution: "3840x2160" },
  { title: "36", category: "Anime", image: "wallpapers/36.png", resolution: "3840x2160" },
  { title: "37", category: "Anime", image: "wallpapers/37.jpg", resolution: "3840x2160" },
  { title: "38", category: "Anime", image: "wallpapers/38.jpg", resolution: "3840x2160" },
  { title: "39", category: "Anime", image: "wallpapers/39.jpg", resolution: "3840x2160" },
  { title: "40", category: "Anime", image: "wallpapers/40.png", resolution: "1920x1080" },
  { title: "41", category: "Anime", image: "wallpapers/41.jpg", resolution: "3840x2160" },
  { title: "42", category: "Anime", image: "wallpapers/42.jpg", resolution: "3840x2160" },
  { title: "43", category: "Anime", image: "wallpapers/43.jpg", resolution: "3840x2160" },
  { title: "44", category: "Anime", image: "wallpapers/44.jpg", resolution: "3840x2160" },
  { title: "45", category: "Anime", image: "wallpapers/45.png", resolution: "3840x2160" },
  { title: "46", category: "Anime", image: "wallpapers/46.png", resolution: "1920x1080" },
  { title: "47", category: "Anime", image: "wallpapers/47.jpg", resolution: "3840x2160" },
  { title: "48", category: "Anime", image: "wallpapers/48.jpg", resolution: "1920x1080" },
  { title: "49", category: "Anime", image: "wallpapers/49.jpg", resolution: "3840x2160" },
  { title: "50", category: "Anime", image: "wallpapers/50.jpg", resolution: "3840x2160" },
  { title: "51", category: "Anime", image: "wallpapers/51.jpg", resolution: "3840x2160" },
  { title: "52", category: "Anime", image: "wallpapers/52.png", resolution: "3840x2160" },
  { title: "53", category: "Anime", image: "wallpapers/53.jpg", resolution: "3840x2160" },
  { title: "54", category: "Anime", image: "wallpapers/54.jpg", resolution: "3840x2160" },
  { title: "55", category: "Anime", image: "wallpapers/55.jpg", resolution: "3840x2160" },
  { title: "56", category: "Anime", image: "wallpapers/56.png", resolution: "3840x2160" },
  { title: "57", category: "Anime", image: "wallpapers/57.png", resolution: "3840x2160" },
  { title: "58", category: "Anime", image: "wallpapers/58.jpg", resolution: "3840x2160" },
  { title: "59", category: "Anime", image: "wallpapers/59.jpg", resolution: "3840x2160" },
  { title: "60", category: "Anime", image: "wallpapers/60.png", resolution: "3840x2160" },
  { title: "61", category: "Anime", image: "wallpapers/61.jpg", resolution: "3840x2160" },
  { title: "62", category: "Anime", image: "wallpapers/62.png", resolution: "3840x2160" },
  { title: "63", category: "Anime", image: "wallpapers/63.jpg", resolution: "3840x2160" },
  { title: "64", category: "Anime", image: "wallpapers/64.png", resolution: "3840x2160" },
  { title: "65", category: "Anime", image: "wallpapers/65.jpg", resolution: "3840x2160" },
  { title: "66", category: "Anime", image: "wallpapers/66.jpg", resolution: "3840x2160" },
  { title: "67", category: "Anime", image: "wallpapers/67.jpg", resolution: "3840x2160" },
  { title: "68", category: "Anime", image: "wallpapers/68.jpg", resolution: "3840x2160" },
  { title: "69", category: "Anime", image: "wallpapers/69.png", resolution: "3840x2160" },
  { title: "70", category: "Anime", image: "wallpapers/70.png", resolution: "3840x2160" },
  { title: "71", category: "Anime", image: "wallpapers/71.png", resolution: "3840x2160" },
  { title: "72", category: "Anime", image: "wallpapers/72.jpg", resolution: "3840x2160" },
  { title: "73", category: "Anime", image: "wallpapers/73.png", resolution: "3840x2160" },
  { title: "74", category: "Anime", image: "wallpapers/74.png", resolution: "3840x2160" },
  { title: "75", category: "Anime", image: "wallpapers/75.png", resolution: "3840x2160" },
  { title: "76", category: "Anime", image: "wallpapers/76.mp4", resolution: "3840x2160" },
  { title: "77", category: "Anime", image: "wallpapers/77.png", resolution: "3840x2160" },
  { title: "78", category: "Anime", image: "wallpapers/78.jpg", resolution: "3840x2160" },
  { title: "79", category: "Anime", image: "wallpapers/79.png", resolution: "3840x2160" },
  { title: "80", category: "Anime", image: "wallpapers/80.jpg", resolution: "3840x2160" },
  { title: "81", category: "Anime", image: "wallpapers/81.jpg", resolution: "3840x2160" },
  { title: "82", category: "Anime", image: "wallpapers/82.jpg", resolution: "3840x2160" },
  { title: "83", category: "Anime", image: "wallpapers/83.jpg", resolution: "3840x2160" },
  { title: "84", category: "Anime", image: "wallpapers/84.jpg", resolution: "3840x2160" },
  { title: "85", category: "Anime", image: "wallpapers/85.mp4", resolution: "3840x2160" }
];

const placeholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="#121317"/><text x="800" y="500" fill="#3a3d47" font-family="sans-serif" font-size="36" text-anchor="middle">SEM PREVIEW</text></svg>`)}`;

const gallery = document.querySelector("#gallery");
const empty = document.querySelector("#empty");
const filters = document.querySelector("#filters");
const searchInput = document.querySelector("#searchInput");
const heroCount = document.querySelector("#heroCount");

let activeCategory = "Todos";

function isVideo(filename) {
  return /\.(mp4|webm|mov)$/i.test(filename);
}

function isGif(filename) {
  return /\.gif$/i.test(filename);
}

function categories() {
  return ["Todos", ...new Set(wallpapers.map(w => w.category))];
}

function resLabel(r) {
  const [w] = r.split("x").map(Number);
  if (w >= 7680) return "8K";
  if (w >= 5120) return "5K+";
  if (w >= 3840) return "4K";
  if (w >= 2560) return "1440p";
  if (w >= 1920) return "1080p";
  return r;
}

function resBadge(r) {
  const [w] = r.split("x").map(Number);
  if (w >= 7680) return "8K";
  if (w >= 5120) return "5K";
  if (w >= 3840) return "4K";
  if (w >= 2560) return "2K";
  return "HD";
}

function typeIcon(filename) {
  if (isVideo(filename)) return `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  if (isGif(filename)) return `<span style="font-size:10px;font-weight:700;letter-spacing:.03em">GIF</span>`;
  return "";
}

function renderFilters() {
  filters.innerHTML = categories().map(cat =>
    `<button class="filter-btn${cat === activeCategory ? ' active' : ''}" data-category="${esc(cat)}">${esc(cat)}</button>`
  ).join("");

  filters.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderFilters();
      render();
    });
  });
}

function render() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = wallpapers.filter(w => {
    const matchCat = activeCategory === "Todos" || w.category === activeCategory;
    const matchQ = !query || w.title.toLowerCase().includes(query) || w.category.toLowerCase().includes(query);
    return matchCat && matchQ;
  });

  gallery.innerHTML = filtered.map((w, i) => {
    const idx = wallpapers.indexOf(w);
    const video = isVideo(w.image);
    const media = video
      ?       `<video data-vid="${idx}" src="${esc(w.image)}" muted loop playsinline preload="metadata" onerror="this.style.display='none'"></video>`
      : `<img data-img="${idx}" src="${esc(w.image)}" alt="${esc(w.title)}" loading="lazy" onerror="this.src='${placeholder}'">`;

    return `
    <article class="card${video ? ' card-video' : ''}" data-index="${idx}" style="animation-delay:${Math.min(i * 30, 400)}ms">
      <div class="card-thumb">
        <div class="card-skeleton" data-skel="${idx}"></div>
        ${media}
        <span class="card-res-badge">${resBadge(w.resolution)}</span>
        ${video ? `<span class="card-type-badge">${typeIcon(w.image)}</span>` : ''}
      </div>
    </article>`;
  }).join("");

  empty.hidden = filtered.length !== 0;
  heroCount.textContent = wallpapers.length;

  gallery.querySelectorAll(".card").forEach(card => {
    const idx = card.dataset.index;
    const vid = card.querySelector(`[data-vid="${idx}"]`);
    const img = card.querySelector(`[data-img="${idx}"]`);
    const skel = card.querySelector(`[data-skel="${idx}"]`);
    const mediaEl = vid || img;

    if (vid) {
      vid.addEventListener("loadeddata", () => skel.classList.add("hidden"), { once: true });
      card.addEventListener("mouseenter", () => vid.play().catch(() => {}));
      card.addEventListener("mouseleave", () => { vid.pause(); vid.currentTime = 0; });
    } else if (img) {
      if (img.complete) {
        skel.classList.add("hidden");
      } else {
        img.addEventListener("load", () => skel.classList.add("hidden"), { once: true });
      }
    }

    card.addEventListener("click", () => openModal(wallpapers[Number(idx)]));
  });
}

function openModal(w) {
  const modal = document.querySelector("#modal");
  const wrap = document.querySelector(".modal-img-wrap");
  const video = isVideo(w.image);

  const existingMedia = wrap.querySelector("img, video");
  if (existingMedia) existingMedia.remove();

  if (video) {
    const v = document.createElement("video");
    v.src = w.image;
    v.controls = true;
    v.autoplay = true;
    v.playsInline = true;
    v.style.width = "100%";
    v.style.maxHeight = "70vh";
    v.style.objectFit = "contain";
    v.style.display = "block";
    wrap.appendChild(v);
  } else {
    const img = document.createElement("img");
    img.src = w.image;
    img.onerror = () => img.src = placeholder;
    img.alt = w.title;
    wrap.appendChild(img);
  }

  document.querySelector("#modalTitle").textContent = w.title;
  document.querySelector("#modalMeta").textContent = `${w.category} · ${w.resolution}${video ? ' · Video' : ''}`;

  const dl = document.querySelector("#downloadButton");
  dl.href = w.image;
  const ext = video ? w.image.split(".").pop() : "jpg";
  dl.download = w.title.toLowerCase().replace(/[^a-z0-9]+/gi, "-") + "." + ext;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.querySelector("#modal");
  const wrap = document.querySelector(".modal-img-wrap");
  const vid = wrap.querySelector("video");
  if (vid) { vid.pause(); vid.src = ""; }
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelector("#closeModal").addEventListener("click", closeModal);
document.querySelector("#modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
searchInput.addEventListener("input", render);

document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

function esc(v) {
  return String(v).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[c]));
}

renderFilters();
render();
