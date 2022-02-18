import styles from "../styles/Footer.module.css";
import MainButton from "./MainButton";
import Title from "./Title";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.top}>
        <Title value1='RAZOR EDGE STUDIO' value2='satisfation guarenteed.' />
        <div className={styles.btnContainer}>
          <MainButton text='623-334-8855' href='/' />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footerContent}>
          <div className={styles.containerOne}>
            <div className={styles.logoContainer}>
              <h4 className={styles.title}>Logo</h4>
            </div>
            <p className={styles.conOneDescription}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
              molestias.Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Earum, molestias.
            </p>
            <div className={styles.iconContainerDisFlex}>
              <p className={styles.icon}>i1</p>
              <p className={styles.icon}>i2</p>
              <p className={styles.icon}>i3</p>
              <p className={styles.icon}>i4</p>
            </div>
          </div>
          <div className={styles.containerTwo}>
            <h4 className={styles.title}>About</h4>
            <ul>
              <li className={styles.menuItem}>item 1</li>
              <li className={styles.menuItem}>item 2</li>
              <li className={styles.menuItem}>item 3</li>
              <li className={styles.menuItem}>item 4</li>
            </ul>
          </div>
          <div className={styles.containerThree}>
            <h4 className={styles.title}>Testimonials</h4>
            <ul>
              <li className={styles.menuItem}>item 1</li>
              <li className={styles.menuItem}>item 2</li>
              <li className={styles.menuItem}>item 3</li>
              <li className={styles.menuItem}>item 4</li>
            </ul>
          </div>
          <div className={styles.containerFour}>
            <h4 className={styles.title}>Contact</h4>
            <ul>
              <li className={styles.menuItem}>item 1</li>
              <li className={styles.menuItem}>item 2</li>
              <li className={styles.menuItem}>item 3</li>
              <li className={styles.menuItem}>item 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
