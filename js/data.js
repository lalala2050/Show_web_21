const WHATSAPP_NUMBER = "8801712345678";

const products = [
  {
    id: 1,
    name: "Nordic Comfort Chair",
    category: "chairs",
    description: "Minimal wooden frame with soft premium fabric.",
    price: 12000,
    oldPrice: 14500,
    topSelling: true,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    hero: true
  },
  {
    id: 2,
    name: "Cloud Rest Bed",
    category: "beds",
    description: "Queen size bed with upholstered headboard and storage.",
    price: 38500,
    oldPrice: 42000,
    topSelling: true,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    hero: true
  },
  {
    id: 3,
    name: "Royal Mirror Dressing Table",
    category: "dressing-tables",
    description: "Large mirror and multiple drawers for organized living.",
    price: 22500,
    oldPrice: 0,
    topSelling: true,
    image: "https://images.unsplash.com/photo-1616628182509-6dd5d6d87d63?auto=format&fit=crop&w=900&q=80",
    hero: false
  },
  {
    id: 4,
    name: "Family Living Combo Pack",
    category: "combo-packs",
    description: "1 bed + 2 chairs + center table in one stylish package.",
    price: 65000,
    oldPrice: 76000,
    topSelling: true,
    image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=900&q=80",
    hero: true
  },
  {
    id: 5,
    name: "Classic Dining Chair",
    category: "chairs",
    description: "Ergonomic chair with polished teak finish.",
    price: 8900,
    oldPrice: 0,
    topSelling: false,
    image: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Urban Platform Bed",
    category: "beds",
    description: "Space-saving modern bed with solid wood frame.",
    price: 33200,
    oldPrice: 36000,
    topSelling: false,
    image: "https://images.unsplash.com/photo-1616594039964-3d5d9d73f047?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Velvet Lounge Chair",
    category: "chairs",
    description: "Soft velvet finish designed for premium comfort.",
    price: 10200,
    oldPrice: 11800,
    topSelling: true,
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Oak Dressing Unit",
    category: "dressing-tables",
    description: "Compact dressing table with warm oak color.",
    price: 19800,
    oldPrice: 0,
    topSelling: false,
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 9,
    name: "Starter Home Combo",
    category: "combo-packs",
    description: "Bed, wardrobe, side table and chair for new homes.",
    price: 73000,
    oldPrice: 81500,
    topSelling: false,
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    name: "Smart Storage Bed",
    category: "beds",
    description: "Hydraulic storage bed with elegant matte finish.",
    price: 41200,
    oldPrice: 46000,
    topSelling: true,
    image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 11,
    name: "Premium Makeup Station",
    category: "dressing-tables",
    description: "LED mirror dressing table with hidden compartments.",
    price: 28900,
    oldPrice: 31500,
    topSelling: false,
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 12,
    name: "Executive Lounge Combo",
    category: "combo-packs",
    description: "Sofa chair pair, coffee table and storage bed set.",
    price: 88000,
    oldPrice: 98000,
    topSelling: true,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80"
  }
];

const categories = [
  { key: "all", label: "All" },
  { key: "chairs", label: "Chairs" },
  { key: "beds", label: "Beds" },
  { key: "dressing-tables", label: "Dressing Tables" },
  { key: "combo-packs", label: "Combo Packs" }
];

const formatPrice = (price) => `৳${price.toLocaleString("en-BD")}`;

const buildWhatsAppLink = (name, price) => {
  const message = `Hello, I want to order this product:\nProduct Name: ${name}\nPrice: ${formatPrice(price)}\nPlease provide more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const productCard = (product) => `
  <article class="product-card">
    <div class="product-media">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
    </div>
    <div class="product-body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price-row">
        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
        <span class="new-price">${formatPrice(product.price)}</span>
      </div>
      <a class="btn btn-primary" href="${buildWhatsAppLink(product.name, product.price)}" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
    </div>
  </article>
`;
