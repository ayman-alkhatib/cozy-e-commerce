import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./ProductListPage.module.css";
import { useLoaderData, useNavigation } from "react-router";
import Loading from "../components/Loading";

function ProductListPage() {
  const productData = useLoaderData();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(productData);

  const navigation = useNavigation();

  useEffect(() => {
    const filterdData = productData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filterdData);
  }, [search, productData]);

  if (navigation.state === "loading") return <Loading />;

  return (
    <div className="container">
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
