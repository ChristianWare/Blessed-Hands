import styles from "../styles/MainButton.module.css";

function MainButton() {
  return (
    <button className={styles.btnPrimary}>
      <p className={styles.btnText}>Contact</p>
      <span className={styles.square}></span>
    </button>
  );
}

export default MainButton;
