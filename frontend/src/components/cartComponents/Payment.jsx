import styles from "./Payment.module.css";
function Payment() {
  return (
    <div className={styles.paymentPage}>
      <div className={styles.paymentMethod}>
        <h2>Payment Method</h2>
        <div className={styles.container}>
          <div className={styles.cart}>
            <input type="radio" name="payment" id="card" />
            <h3>Card</h3>
            <p>**** **** **** 1234</p>
            <p>Expires 12/2022</p>
            <button>remove</button>
          </div>

          <div className={styles.cart}>
            <input type="radio" name="payment" id="card" />
            <h3>Card</h3>
            <p>**** **** **** 5678</p>
            <p>Expires 12/2022</p>
            <button>remove</button>
          </div>
        </div>
      </div>
      <div className={styles.addPayment}>
        <h2>add cart </h2>
        <form>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiration Date" />
          <input type="text" placeholder="CVV" />
          <button>save</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
