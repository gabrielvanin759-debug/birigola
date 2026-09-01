/*
  BOINITIM WALLPAPERS
  Adicione seus wallpapers na pasta /wallpapers e registre-os abaixo.

  Exemplo:
  {
    title: "Meu Wallpaper",
    category: "Games",
    image: "wallpapers/games/meu-wallpaper.jpg",
    resolution: "1920×1080"
  }
*/

const wallpapers = [
  {
    title: "Chainsaw Man",
    category: "Anime",
    image: "wallpapers/1.jpeg",
    resolution: "3840x2160"
  },
  {
    title: "Jujutsu Kaisen",
    category: "Anime",
    image: "wallpapers/1.mp4",
    resolution: "1920x1080"
  },
  {
    title: "Jujutsu Kaisen",
    category: "Anime",
    image: "wallpapers/2.jpeg",
    resolution: "3840x2160"
  },
  {
    title: "Cyber City",
    category: "Cyberpunk",
    image: "wallpapers/cyber-city.svg",
    resolution: "1920×1080"
  },
  {
    title: "Dark Space",
    category: "Space",
    image: "wallpapers/dark-space.svg",
    resolution: "1920×1080"
  }
];

// Se você ainda não colocou as imagens de exemplo,
// os cards continuarão aparecendo com um placeholder.
const placeholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000">
  <rect width="1600" height="1000" fill="#15171b"/>
  <circle cx="1250" cy="200" r="260" fill="#b9ff4a" opacity=".12"/>
  <circle cx="400" cy="750" r="330" fill="#fff" opacity=".03"/>
  <text x="800" y="500" fill="#686e79" font-family="Arial" font-size="42" text-anchor="middle">ADICIONE SEU WALLPAPER</text>
</svg>`)}`;

const gallery = document.querySelector("#gallery");
const empty = document.querySelector("#empty");
const filters = document.querySelector("#filters");
const searchInput = document.querySelector("#searchInput");
const heroCount = document.querySelector("#heroCount");

let activeCategory = "Todos";

function categories() {
  return ["Todos", ...new Set(wallpapers.map(w => w.category))];
}

function renderFilters() {
  filters.innerHTML = categories().map(cat =>
    `<button class="filter ${cat === activeCategory ? "active" : ""}" data-category="${escapeHTML(cat)}">${escapeHTML(cat)}</button>`
  ).join("");

  filters.querySelectorAll(".filter").forEach(btn => {
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
    const matchesCategory = activeCategory === "Todos" || w.category === activeCategory;
    const matchesSearch = !query ||
      w.title.toLowerCase().includes(query) ||
      w.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  gallery.innerHTML = filtered.map((w, i) => `
    <article class="card" data-index="${wallpapers.indexOf(w)}">
      <div class="thumb">
        <img src="${escapeAttr(w.image)}" alt="${escapeAttr(w.title)}" loading="lazy"
             onerror="this.src='${placeholder}'">
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${escapeHTML(w.title)}</h3>
          <div class="card-category">${escapeHTML(w.category)} · ${escapeHTML(w.resolution)}</div>
        </div>
        <div class="card-arrow">↗</div>
      </div>
    </article>
  `).join("");

  empty.hidden = filtered.length !== 0;
  heroCount.textContent = wallpapers.length;

  gallery.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => openModal(wallpapers[Number(card.dataset.index)]));
  });
}

function openModal(w) {
  const modal = document.querySelector("#modal");
  const image = document.querySelector("#modalImage");
  image.src = w.image;
  image.onerror = () => image.src = placeholder;
  image.alt = w.title;
  document.querySelector("#modalTitle").textContent = w.title;
  document.querySelector("#modalMeta").textContent = `${w.category} · ${w.resolution}`;
  const download = document.querySelector("#downloadButton");
  download.href = w.image;
  download.download = w.title.toLowerCase().replace(/[^a-z0-9]+/gi, "-") + ".jpg";
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

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[c]));
}
function escapeAttr(value) { return escapeHTML(value); }

renderFilters();
render();
