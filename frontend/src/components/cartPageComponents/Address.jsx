import styles from "./Address.module.css";
import { useEffect, useState } from "react";
function Address() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [savedAddress, setSavedAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(0);

  useEffect(() => {
    localStorage.setItem(
      "selectedAddress",
      JSON.stringify(savedAddress[selectedAddress])
    );
  }, [selectedAddress, savedAddress]);

  useEffect(() => {
    const lsAddress = localStorage.getItem("address");
    if (lsAddress) {
      setSavedAddress(JSON.parse(lsAddress));
    } else {
      localStorage.setItem("address", savedAddress);
    }
  }, []);
  function handleClick(e) {
    e.preventDefault();
    const newSavedAddress = [
      ...savedAddress,
      {
        name,
        addressInput,
        email,
      },
    ];
    setSavedAddress(newSavedAddress);
    localStorage.setItem("address", JSON.stringify(newSavedAddress));

    setEmail("");
    setName("");
    setAddressInput("");
  }

  function handleRemoveAddress(i) {
    const newSavedAddress = savedAddress.filter((_, index) => index !== i);
    setSavedAddress(newSavedAddress);
    localStorage.setItem("address", JSON.stringify(newSavedAddress));
  }

  return (
    <div className={styles.addressPage}>
      <section className={styles.addressList}>
        <h2>Choose Address</h2>
        {savedAddress.map((addressObj, index) => (
          <AddressItem
            key={index}
            address={addressObj}
            onAddressChange={() => setSelectedAddress(index)}
            onAddressRemove={() => handleRemoveAddress(index)}
            isSelected={selectedAddress === index}
          />
        ))}
      </section>
      <div className={styles.addAddress}>
        <h2> add new address</h2>
        <form>
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="full Address"
            value={addressInput}
            onChange={(e) => {
              setAddressInput(e.target.value);
            }}
          />
          <button onClick={handleClick}>Save and Deliver Here</button>
        </form>
      </div>
    </div>
  );
}

export default Address;

function AddressItem({
  address,
  onAddressChange,
  isSelected,
  onAddressRemove,
}) {
  return (
    <div className={styles.addressItem}>
      <input
        type="radio"
        name="address"
        checked={isSelected}
        onChange={onAddressChange}
      />
      <h3>address: </h3>
      <p> {address.addressInput}</p>
      <p>{address.email}</p>
      <button onClick={onAddressRemove}>remove</button>
    </div>
  );
}
