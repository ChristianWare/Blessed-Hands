import styles from '../styles/Title.module.css'

function Title({ value1, value2 }) {
  return (
    <div className={styles.sideTitle}>
      <h1 className={styles.value1}>{value1}</h1>
      <h2 className={styles.value2}>{value2}</h2>
    </div>
  );
}

export default Title
