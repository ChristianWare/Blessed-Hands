import styles from "../styles/Services.module.css";
import Title from "./Title";

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.titleContainer}>
        <Title value1='My Services' value2='All Styles. Any Design' />
      </div>
      <div className={styles.categories}>
        <p>Hair Cuts</p>
        <p>Beards</p>
        <p>Shaves</p>
        <p>Line Ups</p>
        <p>Children</p>
        <p>Woman</p>
      </div>
    </div>
  );
}

export default Services;
