import styles from "../styles/SecondaryButton.module.css";

function SecondaryButton({ text }) {
    return (
      <button className={`${styles.btn} ${styles.btnPrimary}`}>
        <p className={styles.buttonText}>{text}</p>
        <span className={styles.square}></span>
      </button>
    );
}

export default SecondaryButton
