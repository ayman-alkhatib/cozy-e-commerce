import ProductCard from "../components/ProductCard";
import styles from "./ProductListPage.module.css";
function ProductListPage() {
  return (
    <div className="container">
      <div className={styles.productList}>
        {fakeData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;

const fakeData = [
  {
    id: 99,
    name: "Ergonomic Office Chair",
    description:
      "Comfortable office chair with adjustable armrests and lumbar support.",
    category: "furniture",
    thumbnail: "https://example.com/images/office-chair.jpg",
    price: 129.99,
    quantity: 50,
  },
  {
    id: 100,
    name: "Gaming Chair",
    description: "High-back gaming chair with headrest and reclining function.",
    category: "furniture",
    thumbnail: "https://example.com/images/gaming-chair.jpg",
    price: 199.99,
    quantity: 30,
  },
  {
    id: 101,
    name: "Wooden Dining Chair",
    description: "Classic wooden dining chair with a cushioned seat.",
    category: "furniture",
    thumbnail: "https://example.com/images/dining-chair.jpg",
    price: 79.99,
    quantity: 100,
  },
  {
    id: 102,
    name: "Lounge Chair",
    description: "Modern lounge chair with soft fabric upholstery.",
    category: "furniture",
    thumbnail: "https://example.com/images/lounge-chair.jpg",
    price: 249.99,
    quantity: 25,
  },
  {
    id: 103,
    name: "Rocking Chair",
    description: "Traditional wooden rocking chair for relaxation.",
    category: "furniture",
    thumbnail: "https://example.com/images/rocking-chair.jpg",
    price: 149.99,
    quantity: 40,
  },
  {
    id: 104,
    name: "Plastic Stackable Chair",
    description: "Lightweight and durable plastic chair, easy to store.",
    category: "furniture",
    thumbnail: "https://example.com/images/plastic-chair.jpg",
    price: 29.99,
    quantity: 150,
  },
  {
    id: 105,
    name: "Recliner Chair",
    description: "Luxury recliner chair with footrest and plush padding.",
    category: "furniture",
    thumbnail: "https://example.com/images/recliner-chair.jpg",
    price: 349.99,
    quantity: 20,
  },
  {
    id: 106,
    name: "Bar Stool",
    description: "Height-adjustable bar stool with a metal frame.",
    category: "furniture",
    thumbnail: "https://example.com/images/bar-stool.jpg",
    price: 59.99,
    quantity: 75,
  },
  {
    id: 107,
    name: "Accent Chair",
    description: "Stylish accent chair with velvet fabric and wooden legs.",
    category: "furniture",
    thumbnail: "https://example.com/images/accent-chair.jpg",
    price: 189.99,
    quantity: 35,
  },
  {
    id: 108,
    name: "Outdoor Patio Chair",
    description: "Weather-resistant outdoor chair with cushions.",
    category: "furniture",
    thumbnail: "https://example.com/images/patio-chair.jpg",
    price: 99.99,
    quantity: 60,
  },
];
