import styles from "../styles/Card.module.css";

function Card({ logo, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>{logo}</div>
      <div className={styles.cardTitle}>
        <h4>{title}</h4>
      </div>
    </div>
  );
}


export default Card;