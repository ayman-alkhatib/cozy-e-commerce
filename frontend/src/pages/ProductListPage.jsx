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
    thumbnail:
      "https://i.pinimg.com/736x/c9/89/26/c989262c0135cd202aa8767f109e5fc7.jpg",
    price: 129.99,
    quantity: 50,
  },
  {
    id: 100,
    name: "Gaming Chair",
    description: "High-back gaming chair with headrest and reclining function.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/39/b9/10/39b910f81acad40d1f9e59d7c0d4d2ad.jpg",
    price: 199.99,
    quantity: 30,
  },
  {
    id: 101,
    name: "Wooden Dining Chair",
    description: "Classic wooden dining chair with a cushioned seat.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/a5/17/46/a517468e1e20adb2fbcc8ab0d7605cb2.jpg",
    price: 79.99,
    quantity: 100,
  },
  {
    id: 102,
    name: "Lounge Chair",
    description: "Modern lounge chair with soft fabric upholstery.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/27/0c/f4/270cf494671beda7b423e0c35f1f2ccc.jpg",
    price: 249.99,
    quantity: 25,
  },
  {
    id: 103,
    name: "Rocking Chair",
    description: "Traditional wooden rocking chair for relaxation.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/f4/e9/f8/f4e9f84190d786ac6b590f43d891ef9d.jpg",
    price: 149.99,
    quantity: 40,
  },
  {
    id: 104,
    name: "Plastic Stackable Chair",
    description: "Lightweight and durable plastic chair, easy to store.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/4a/88/95/4a889541a5b0069d4a006a11064afe4e.jpg",
    price: 29.99,
    quantity: 150,
  },
  {
    id: 105,
    name: "Recliner Chair",
    description: "Luxury recliner chair with footrest and plush padding.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/45/26/67/45266708438b522ce34d74d77b6c088b.jpg",
    price: 349.99,
    quantity: 20,
  },
  {
    id: 106,
    name: "Bar Stool",
    description: "Height-adjustable bar stool with a metal frame.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/ab/83/30/ab8330a5b29d5ba61c630460e417b8fc.jpg",
    price: 59.99,
    quantity: 75,
  },
  {
    id: 107,
    name: "Accent Chair",
    description: "Stylish accent chair with velvet fabric and wooden legs.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/20/08/65/2008656d73bbbe7da4a2b06d335ef53c.jpg",
    price: 189.99,
    quantity: 35,
  },
  {
    id: 108,
    name: "Outdoor Patio Chair",
    description: "Weather-resistant outdoor chair with cushions.",
    category: "furniture",
    thumbnail:
      "https://i.pinimg.com/736x/36/c7/8b/36c78b00459bf333e3f70fbbca77d25b.jpg",
    price: 99.99,
    quantity: 60,
  },
];
