import styles from "./Modal.module.css";

function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;