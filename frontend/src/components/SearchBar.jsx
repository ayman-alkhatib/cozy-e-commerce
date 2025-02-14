import { useState } from "react";
import styles from "./SearchBar.module.css";
function SearchBar({ handleSearch }) {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="searchBtn"
        onClick={() => {
          handleSearch(search);
        }}
      >
        search
      </button>
    </div>
  );
}

export default SearchBar;
