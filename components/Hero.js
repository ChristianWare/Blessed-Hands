import Image from "next/image";
import styles from "../styles/Hero.module.css";
import MainButton from "../components/MainButton";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <div className={styles.heroLeftWrapper}>
          <h2 className={styles.intro}>Welcome To Octavious'</h2>
          <h1 className={styles.name}>
            <span className={styles.res}>Razor Edge Studio</span> Barber Shop
          </h1>
          <div className={styles.heroDescription}>
            <p>
              Responsible for using scissors or clippers to trim, cut, shave, or
              shape hair in a barbershop. Provides consultation to client,
              selects equipment, cuts hair, styles, and then blow-dries and
              finishes hair.
            </p>
          </div>
            <div className={styles.btnContainer}>
              <MainButton text='MY SERVICES' />
            </div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.imgContainer}>
          <Image
            src='/images/img2nobg.png'
            width={450}
            height={450}
            alt='Barber Image'
            // layout='fixed'
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
