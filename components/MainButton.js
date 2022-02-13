import styles from "../styles/MainButton.module.css";
import Link from "next/link";

function MainButton({ text, href = "" }) {
  return (
    <Link href={href}>
      <a className={`${styles.btn} ${styles.btnPrimary}`}>
        <p className={styles.buttonText}>{text}</p>
        <span className={styles.square}></span>
      </a>
    </Link>
  );
}

export default MainButton;
