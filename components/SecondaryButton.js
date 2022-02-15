import styles from "../styles/SecondaryButton.module.css";
import Link from 'next/link'

function SecondaryButton({ text, href='' }) {
    return (
      <Link href={href}>
        <a className={styles.btn}>
          <p className={styles.buttonText}>{text}</p>
          <span className={styles.square}></span>
        </a>
      </Link>
    );
}

export default SecondaryButton


