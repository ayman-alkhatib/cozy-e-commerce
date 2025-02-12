import styles from "./ProductDetailsPage.module.css";
function ProductDetailsPage() {
  return (
    <div className="container">
      <div className={styles.productDetailsPage}>
        <section className={styles.productInfos}>
          <div className={styles.path}>
            <span>Home</span> / <span>{fakeData.name}</span> /
          </div>
          <h1>{fakeData.name}</h1>
          <p className={styles.price}>${fakeData.price}</p>
          <p className={styles.description}>{fakeData.description}</p>
          <ul className={styles.colors}>
            <li>
              <span
                className="red"
                style={{ backgroundColor: "#C1BDB3" }}
              ></span>
            </li>
            <li>
              <span
                className="blue"
                style={{ backgroundColor: "#58737D" }}
              ></span>
            </li>
            <li>
              <span
                className="green"
                style={{ backgroundColor: "#545454" }}
              ></span>
            </li>
            <li>
              <span
                className="yellow"
                style={{ backgroundColor: "#CBA5A5" }}
              ></span>
            </li>
          </ul>
          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button className={styles.addToCart}>Add to Cart</button>
          </div>
        </section>
        <section className={styles.productImages}>
          <div className={styles.mainImage}>
            <img src={"/" + fakeData.thumbnail} alt={fakeData.name} />
          </div>
          <div className={styles.moreImages}>
            {fakeData.images.map((image, index) => (
              <img key={index} src={image} alt={fakeData.name} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetailsPage;

const fakeData = {
  id: 99,
  name: "Ergonomic Office Chair",
  description:
    "A premium ergonomic office chair designed for long hours of work. Features include adjustable armrests, lumbar support, a breathable mesh back, and a 360-degree swivel base for maximum comfort.",
  category: "furniture",
  thumbnail: "image.png",
  price: 129.99,
  quantity: 50,
  images: [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
  ],
};
