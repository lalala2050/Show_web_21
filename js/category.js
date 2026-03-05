const byId = (id) => document.getElementById(id);

const query = new URLSearchParams(window.location.search);
const categoryKey = query.get("category") || "chairs";

const categoryName = categories.find((item) => item.key === categoryKey)?.label || "Products";
byId("categoryTitle").textContent = categoryName;

const list = products.filter((item) => item.category === categoryKey);
byId("categoryGrid").innerHTML = list.length
  ? list.map(productCard).join("")
  : "<p>No products found in this category.</p>";
