import Image from "next/image";
import styles from "../styles/Hero.module.css";
import MainButton from "../components/MainButton";
import heroImg from "../public/images/img2nobg.png";
import SecondaryButton from "./SecondaryButton";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <h2 className={styles.introText}>Welcome To Octavious'</h2>
        <h1 className={styles.heading}>
          <span className={styles.res}>Razor Edge Studio</span> Barber Shop
        </h1>
        <p className={styles.description}>
          Responsible for using scissors or clippeprs to trim, cut, shave, or
          shape hair in a barbershop. Provides consultation to client, selects
          equipment, cuts hair, styles, and then blow-dries and finishes hair.
        </p>
        <div className={styles.btnContainer}>
          <MainButton text='My Services' />
          <SecondaryButton text='Contact Me' />
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.ellipseContainer}>
          <div className={`${styles.ellipse} ${styles.thick}`}>
            <Image src={heroImg} alt='Hero Image' objectFit='contain' />
          </div>
          <div className={`${styles.ellipse} ${styles.blueCrayola}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
