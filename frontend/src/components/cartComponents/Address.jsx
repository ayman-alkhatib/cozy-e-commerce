import styles from "./Address.module.css";
function Address() {
  return (
    <div className={styles.address}>
      <h2>Shipping Address</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="Pincode" />
        <input type="text" placeholder="Locality" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City/District/Town" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Landmark" />
        <button>Save and Deliver Here</button>
      </form>
    </div>
  );
}

export default Address;
