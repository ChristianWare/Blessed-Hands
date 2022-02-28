import Image from "next/image";
import styles from "../styles/About.module.css";
import Title from "./Title";
import WorkImage from "../public/images/img7nobg.png";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import {
  topContainerAnimation,
  slideLeft,
  slideRight,
} from "../components/Animation";

function About() {
  const [element, controls] = useScroll();

  return (
    <div className={styles.aboutContainer} id='about' ref={element}>
      <Title value1='About Me' value2='25 Years in the Game.' />
      <motion.div
        className={styles.container}
        variants={topContainerAnimation}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={styles.imageContainer}
          variants={slideLeft}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
        >
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
        </motion.div>
        <motion.div
          variants={slideRight}
          animate={controls}
          transition={{ type: "tween", duration: 0.5 }}
          className={styles.right}
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
