export const parfums = [
  {
    "id": "1",
    "image": "https://cdn2.easycosmetic.ch/images/Produkte/D2/lancome-tresor-midnight-rose-leau-de-parfum-spray-30ml.png",
    "title": "Midnight Rose",
    "brand": "Lancome",
    "description": "A sensual blend of rose, vanilla and patchouli for elegant evenings. A sensual blend of rose, vanilla and patchouli for elegant evenings.",
    "price": 89.99,
    "isBestSeller": true,
    "createdAt": "2024-11-10",
    "rating": 4.8
  },
  {
    "id": "2",
    "image": "https://www.hubbuloud.shop/cdn/shop/files/IMG-0485.png?v=1755014487&width=1920",
    "title": "Ocean Whisper",
    "brand": "Ibrahim Al Qurashi",
    "description": "Fresh aquatic notes with hints of citrus and white musk.",
    "price": 74.50,
    "isBestSeller": false,
    "createdAt": "2024-12-01",
    "rating": 4.3
  },
  {
    "id": "3",
    "image": "https://www.orienticaperfumes.com/cdn/shop/files/Amber-Noir-bottle1_grande.png?v=1761538820",
    "title": "Amber Noir",
    "brand": "Orientica",
    "description": "Warm amber, spices and woody accords for a bold signature scent.",
    "price": 110.00,
    "isBestSeller": true,
    "createdAt": "2025-01-05",
    "rating": 4.9
  },
  {
    "id": "4",
    "image": "https://sdcdn.io/tf/tf_sku_T1X401_2000x2000_0.png?height=1400px&width=1400px",
    "title": "Velvet Orchid",
    "brand": "Tom Ford",
    "description": "Soft floral bouquet with jasmine, peony and creamy sandalwood.",
    "price": 65.00,
    "isBestSeller": false,
    "createdAt": "2025-01-15",
    "rating": 4.1
  },
  {
    "id": "5",
    "image": "https://www.myperfumeshop.qa/cdn/shop/files/atelier-cologne-gold-leather-pure-perfume-perfume-cologne-151238.png?v=1722391852&width=2048",
    "title": "Rare Gold Leather",
    "brand": "Atelier Cologne",
    "description": "Bright citrus opening balanced with neroli and warm amber base.",
    "price": 58.99,
    "isBestSeller": true,
    "createdAt": "2025-02-02",
    "rating": 4.6
  }
]

export const getParfumById = (id) => parfums.find((item) => item.id === id)
