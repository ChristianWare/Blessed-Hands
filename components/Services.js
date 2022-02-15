import styles from "../styles/Services.module.css";
import Title from "./Title";

function Services() {
  return (
    <div className={styles.servicesContainer}>
      <Title value1='My Services' value2='from fades to flatops' />
    </div>
  );
}

export default Services;
