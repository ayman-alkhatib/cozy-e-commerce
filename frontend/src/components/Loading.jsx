import styles from "./Loading.module.css";
function Loading() {
  return (
    <div className={styles.loadingState}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default Loading;
