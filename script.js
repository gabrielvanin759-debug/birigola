const wallpapers = [
  { title: "1", category: "Anime", image: "wallpapers/1.jpeg", resolution: "3840x2160" },
  { title: "2", category: "Anime", image: "wallpapers/2.jpeg", resolution: "3840x2160" },
  { title: "3", category: "Anime", image: "wallpapers/3.jpg", resolution: "2560x1440" },
  { title: "4", category: "Anime", image: "wallpapers/5.png", resolution: "2112x1415" },
  { title: "5", category: "Anime", image: "wallpapers/6.jpg", resolution: "3840x2160" },
  { title: "6", category: "Anime", image: "wallpapers/7.jpg", resolution: "3840x2160" },
  { title: "7", category: "Anime", image: "wallpapers/8.jpg", resolution: "3840x2160" },
  { title: "8", category: "Anime", image: "wallpapers/9.jpg", resolution: "5120x2880" },
  { title: "9", category: "Anime", image: "wallpapers/10.jpg", resolution: "7680x4320" },
  { title: "10", category: "Anime", image: "wallpapers/11.jpg", resolution: "3840x2160" },
  { title: "11", category: "Anime", image: "wallpapers/12.png", resolution: "3840x2160" },
  { title: "12", category: "Anime", image: "wallpapers/13.jpg", resolution: "3840x2281" },
  { title: "13", category: "Anime", image: "wallpapers/14.jpg", resolution: "5120x1440" },
  { title: "14", category: "Anime", image: "wallpapers/15.jpg", resolution: "4124x2626" },
  { title: "15", category: "Anime", image: "wallpapers/16.png", resolution: "3840x2160" },
  { title: "16", category: "Anime", image: "wallpapers/17.png", resolution: "2560x1440" },
  { title: "17", category: "Anime", image: "wallpapers/18.jpg", resolution: "4421x2500" },
  { title: "18", category: "Anime", image: "wallpapers/19.png", resolution: "3200x1656" },
  { title: "19", category: "Anime", image: "wallpapers/20.jpg", resolution: "3840x1634" },
  { title: "20", category: "Anime", image: "wallpapers/21.jpg", resolution: "5040x2160" },
  { title: "21", category: "Anime", image: "wallpapers/22.jpg", resolution: "2048x1152" },
  { title: "22", category: "Anime", image: "wallpapers/23.jpg", resolution: "5138x1445" },
  { title: "23", category: "Anime", image: "wallpapers/24.jpg", resolution: "3840x2160" },
  { title: "24", category: "Anime", image: "wallpapers/25.png", resolution: "3840x2160" },
  { title: "25", category: "Anime", image: "wallpapers/26(1).jpg", resolution: "7008x4333" },
  { title: "26", category: "Anime", image: "wallpapers/27(1).jpg", resolution: "3840x2620" },
  { title: "27", category: "Anime", image: "wallpapers/28.jpg", resolution: "3853x3000" },
  { title: "28", category: "Anime", image: "wallpapers/29.png", resolution: "3840x2160" },
  { title: "29", category: "Anime", image: "wallpapers/30.jpg", resolution: "2800x1575" },
  { title: "30", category: "Anime", image: "wallpapers/31.jpg", resolution: "4000x2660" },
  { title: "31", category: "Anime", image: "wallpapers/32.jpg", resolution: "3840x2160" },
  { title: "32", category: "Anime", image: "wallpapers/33.jpg", resolution: "3840x2400" },
  { title: "33", category: "Anime", image: "wallpapers/34.png", resolution: "2560x1440" },
  { title: "34", category: "Anime", image: "wallpapers/35.png", resolution: "3840x2160" },
  { title: "35", category: "Anime", image: "wallpapers/36.jpg", resolution: "3840x2160" },
  { title: "36", category: "Anime", image: "wallpapers/37.jpg", resolution: "3840x2160" },
  { title: "37", category: "Anime", image: "wallpapers/38.jpg", resolution: "3840x2240" },
  { title: "38", category: "Anime", image: "wallpapers/39.jpg", resolution: "3840x2160" },
  { title: "39", category: "Anime", image: "wallpapers/40.jpg", resolution: "3840x2160" },
  { title: "40", category: "Anime", image: "wallpapers/41.png", resolution: "1920x1080" },
  { title: "41", category: "Anime", image: "wallpapers/42.jpg", resolution: "3840x2160" },
  { title: "42", category: "Anime", image: "wallpapers/43.jpg", resolution: "3508x2380" },
  { title: "43", category: "Anime", image: "wallpapers/44.jpg", resolution: "3840x1650" },
  { title: "44", category: "Anime", image: "wallpapers/45.png", resolution: "3840x2160" },
  { title: "45", category: "Anime", image: "wallpapers/46.png", resolution: "1920x1080" },
  { title: "46", category: "Anime", image: "wallpapers/47.jpg", resolution: "3840x2160" },
  { title: "47", category: "Anime", image: "wallpapers/48.jpg", resolution: "1920x1080" },
  { title: "48", category: "Anime", image: "wallpapers/49.png", resolution: "3840x2160" },
  { title: "49", category: "Anime", image: "wallpapers/50.jpg", resolution: "3840x2012" },
  { title: "50", category: "Anime", image: "wallpapers/51.png", resolution: "2856x1590" },
  { title: "51", category: "Anime", image: "wallpapers/52.jpg", resolution: "4335x2990" },
  { title: "52", category: "Anime", image: "wallpapers/53.png", resolution: "3840x2160" },
  { title: "53", category: "Anime", image: "wallpapers/54.jpg", resolution: "1920x1080" },
  { title: "54", category: "Anime", image: "wallpapers/55.jpg", resolution: "3840x2282" },
  { title: "55", category: "Anime", image: "wallpapers/56.jpg", resolution: "2560x1440" },
  { title: "56", category: "Anime", image: "wallpapers/57.jpg", resolution: "2048x1449" },
  { title: "57", category: "Anime", image: "wallpapers/58.png", resolution: "5160x2160" },
  { title: "58", category: "Anime", image: "wallpapers/59.png", resolution: "1920x1080" },
  { title: "59", category: "Anime", image: "wallpapers/60.png", resolution: "2560x1440" },
  { title: "60", category: "Anime", image: "wallpapers/61.jpg", resolution: "5625x3750" },
  { title: "61", category: "Anime", image: "wallpapers/62.png", resolution: "3597x2064" },
  { title: "62", category: "Anime", image: "wallpapers/63.png", resolution: "1920x1200" },
  { title: "63", category: "Anime", image: "wallpapers/64.png", resolution: "2560x1440" }
];

const placeholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000"><rect width="1600" height="1000" fill="#121317"/><text x="800" y="500" fill="#3a3d47" font-family="sans-serif" font-size="36" text-anchor="middle">SEM PREVIEW</text></svg>`)}`;

const gallery = document.querySelector("#gallery");
const empty = document.querySelector("#empty");
const filters = document.querySelector("#filters");
const searchInput = document.querySelector("#searchInput");
const heroCount = document.querySelector("#heroCount");

let activeCategory = "Todos";
let renderedCards = new Set();

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

  const newIndices = new Set(filtered.map(w => wallpapers.indexOf(w)));
  renderedCards.clear();

  gallery.innerHTML = filtered.map((w, i) => {
    const idx = wallpapers.indexOf(w);
    return `
    <article class="card" data-index="${idx}" style="animation-delay:${Math.min(i * 30, 400)}ms">
      <div class="card-thumb">
        <div class="card-skeleton" data-skel="${idx}"></div>
        <img data-img="${idx}" src="${esc(w.image)}" alt="${esc(w.title)}" loading="lazy" onerror="this.src='${placeholder}'">
        <span class="card-res-badge">${resBadge(w.resolution)}</span>
        <div class="card-play">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
        </div>
      </div>

    </article>`;
  }).join("");

  empty.hidden = filtered.length !== 0;
  heroCount.textContent = wallpapers.length;

  gallery.querySelectorAll(".card").forEach(card => {
    const idx = card.dataset.index;
    const img = card.querySelector(`[data-img="${idx}"]`);
    const skel = card.querySelector(`[data-skel="${idx}"]`);

    if (img.complete) {
      skel.classList.add("hidden");
    } else {
      img.addEventListener("load", () => skel.classList.add("hidden"), { once: true });
    }

    card.addEventListener("click", () => openModal(wallpapers[Number(idx)]));
  });
}

function openModal(w) {
  const modal = document.querySelector("#modal");
  const img = document.querySelector("#modalImage");
  img.src = w.image;
  img.onerror = () => img.src = placeholder;
  img.alt = w.title;
  document.querySelector("#modalTitle").textContent = w.title;
  document.querySelector("#modalMeta").textContent = `${w.category} · ${w.resolution}`;
  const dl = document.querySelector("#downloadButton");
  dl.href = w.image;
  dl.download = w.title.toLowerCase().replace(/[^a-z0-9]+/gi, "-") + ".jpg";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.querySelector("#modal");
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
