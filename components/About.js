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
              layout="responsive"
              className={styles.imgBackground}
            />
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.aboutDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            nam quis, tenetur facilis delectus a architecto odio non magni
            nesciunt dolorum facere error obcaecati quia aliquid eos numquam
            dolores harum.
          </p>
          <div className={styles.bulletPoints}>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>lIne Item Number 1</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>lIne Item Number 2</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>lIne Item Number 3</p>
            </div>
            <div className={styles.indvBullet}>
              <AiOutlineCheckCircle className={styles.checkIcon} />
              <p>lIne Item Number 4</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
