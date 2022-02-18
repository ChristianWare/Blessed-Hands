import styles from "../styles/Footer.module.css";
import MainButton from "./MainButton";
import Title from "./Title";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.top}>
        <Title value1='get your next cut with me!' value2='satisfation guarenteed.' />
        <div className={styles.btnContainer}>
          <MainButton text='623-334-8855' href='/' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
