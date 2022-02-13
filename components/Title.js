import styles from '../styles/Title.module.css'

function Title({ value }) {
  return (
    <div className={styles.sideTitle}>
      <h1 className={styles.value}>{value}</h1>
    </div>
  )
}

export default Title
