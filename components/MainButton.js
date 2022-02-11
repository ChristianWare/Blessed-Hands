import styles from "../styles/MainButton.module.css";

function MainButton({ text }) {
  return (
    <button className={`${styles.btn} ${styles.btnPrimary}`}>
      <p className={styles.buttonText}>{text}</p>
      <span className={styles.square}></span>
    </button>
  );
}

export default MainButton;
