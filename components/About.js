import Image from "next/image";
import styles from "../styles/About.module.css";
import Title from "./Title";
import WorkImage from "../public/images/img7nobg.png";
import { AiOutlineCheckCircle } from "react-icons/ai";

function About() {
  return (
    <div className={styles.aboutContainer} id='about'>
      <Title value1='About Me' value2='25 Years in the Game.' />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src={WorkImage}
              alt='Work Image'
              width={375}
              height={375}
              objectFit='cover'
              layout='responsive'
              className={styles.imgBackground}
            />
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.aboutDescription} lang='en'>
            I&apos;ve worked as a Barber for the past five years. I specializes
            in straight razor shaves for those who like a more traditional
            shave. I create a relaxed environment for all my clients and looks
            forward to making you look and feel your best. Here are some of the
            things i do best:
          </p>
          <div className={styles.bulletPoints}>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>I&apos;m a trained and certified master barber</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>I only use top tier tools</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>I build strong connections</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>I can modernize classic looks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
