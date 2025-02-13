import { useNavigate } from "react-router";
import styles from "./Address.module.css";
function Address() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    // navigate to payment page
    navigate("/cart/payment");
  };
  return (
    <div className={styles.addressPage}>
      <section className={styles.addressList}>
        <h2>Choose Address</h2>
        <AddressItem address={fakeAddress} />
        <AddressItem address={fakeAddress} />
      </section>
      <div className={styles.addAddress}>
        <h2> add new address</h2>
        <form>
          <input type="text" placeholder="your email" />
          <input type="text" placeholder="your name" />
          <input type="text" placeholder="full Address" />
          <button onClick={handleClick}>Save and Deliver Here</button>
        </form>
      </div>
    </div>
  );
}

export default Address;

function AddressItem({ address }) {
  return (
    <div className={styles.addressItem}>
      <input type="radio" name="address" />
      <h3>{address.type}</h3>
      <p>Address: {address.address}</p>
      <p>email: {address.email}</p>
      <button>remove</button>
    </div>
  );
}

const fakeAddress = {
  address: "123, fake street, fake city",
  email: "email@gmail.com",
  type: "",
};
