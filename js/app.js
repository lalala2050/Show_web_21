const byId = (id) => document.getElementById(id);

const renderProducts = (elementId, list, limit = 8) => {
  const target = byId(elementId);
  if (!target) return;
  target.innerHTML = list.slice(0, limit).map(productCard).join("");
};

const renderHero = () => {
  const heroSlider = byId("heroSlider");
  if (!heroSlider) return;

  const slides = products.filter((p) => p.hero);
  let activeIndex = 0;

  const slideTemplate = (item, isActive) => `
    <article class="slide ${isActive ? "active" : ""}">
      <div class="slide-content">
        <h1>${item.name}</h1>
        <p>${item.description}</p>
        <div class="price-row">
          ${item.oldPrice ? `<span class="old-price">${formatPrice(item.oldPrice)}</span>` : ""}
          <span class="new-price">${formatPrice(item.price)}</span>
        </div>
        <a class="btn btn-primary" href="${buildWhatsAppLink(item.name, item.price)}" target="_blank" rel="noopener noreferrer">Order Now</a>
      </div>
      <div class="slide-image">
        <img src="${item.image}" alt="${item.name}" loading="eager" />
      </div>
    </article>
  `;

  const paint = () => {
    heroSlider.innerHTML = slides
      .map((item, index) => slideTemplate(item, index === activeIndex))
      .join("");
  };

  const next = () => {
    activeIndex = (activeIndex + 1) % slides.length;
    paint();
  };

  const prev = () => {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length;
    paint();
  };

  byId("nextSlide")?.addEventListener("click", next);
  byId("prevSlide")?.addEventListener("click", prev);
  setInterval(next, 5000);
  paint();
};

const renderTopSellingWithFilter = () => {
  const filterGroup = byId("filterGroup");
  const topSellingGrid = byId("topSellingGrid");
  if (!filterGroup || !topSellingGrid) return;

  let activeFilter = "all";

  const draw = () => {
    const filtered = products.filter((p) => {
      const top = p.topSelling;
      const categoryMatch = activeFilter === "all" || p.category === activeFilter;
      return top && categoryMatch;
    });
    topSellingGrid.innerHTML = filtered.map(productCard).join("");

    filterGroup.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("active", button.dataset.key === activeFilter);
    });
  };

  filterGroup.innerHTML = categories
    .map(
      (category) =>
        `<button class="filter-btn" data-key="${category.key}">${category.label}</button>`
    )
    .join("");

  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-key]");
    if (!button) return;
    activeFilter = button.dataset.key;
    draw();
  });

  draw();
};

const categoryProducts = (category) => products.filter((item) => item.category === category);

renderHero();
renderTopSellingWithFilter();
renderProducts("chairsGrid", categoryProducts("chairs"), 8);
renderProducts("bedsGrid", categoryProducts("beds"), 8);
renderProducts("dressingGrid", categoryProducts("dressing-tables"), 8);
renderProducts("comboGrid", categoryProducts("combo-packs"), 8);

const menuToggle = byId("menuToggle");
menuToggle?.addEventListener("click", () => {
  const nav = byId("mainNav");
  nav?.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", String(nav?.classList.contains("show")));
});
