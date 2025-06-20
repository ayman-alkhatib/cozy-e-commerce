import styles from "./FilterField.module.css";

export default function FilterField({ value = [], onChange, options = [] }) {
  const handleToggle = (status) => {
    if (value.includes(status)) {
      onChange(value.filter((v) => v !== status));
    } else {
      onChange([...value, status]);
    }
  };

  const handleReset = () => {
    onChange([]);
  };

  return (
    <div className={styles.filterField}>
      <div className={styles.options}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={value.includes(option.value) ? styles.active : ""}
            onClick={() => handleToggle(option.value)}
          >
            {option.label}
          </button>
        ))}
        <button
          type="button"
          className={styles.reset}
          onClick={handleReset}
          disabled={value.length === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}