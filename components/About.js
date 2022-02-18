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
            I've worked as a Barber for the past five years. I specializes in
            straight razor shaves for those who like a more traditional shave. I
            create a relaxed environment for all my clients and looks forward to
            making you look and feel your best. Here are some of the things i do
            best:
          </p>
          <div className={styles.bulletPoints}>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>Trained and Certified Master Barber</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>Top Tier Tools</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>Build Strong Connections</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>Modernize Classic Looks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
