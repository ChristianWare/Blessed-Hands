import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import MainButton from "./MainButton";
import Title from "./Title";
import logo from "../public/images/logolight.svg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fromUp, fromDown } from "./Animation";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.top}>
        <Title value1='RAZOR EDGE STUDIO' value2='satisfation guarenteed.' />
        <div className={styles.btnContainer}>
          <MainButton href='tel:623-334-8855' text='623-334-8855' />
        </div>
      </div>
      <div className={styles.bottom} ref={element}>
        <div className={styles.footerContent}>
          <motion.div
            className={styles.containerOne}
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.logoContainer}>
              <Link href='/' passHref>
                <a>
                  <Image src={logo} alt='logo' />
                </a>
              </Link>
            </div>
            <p className={styles.conOneDescription} lang='en'>
              The only place in the valley to get the sharpest cuts. From fades
              to flat tops, I&apos;ve got you covered. I create a relaxed
              environment for all my clients and looks forward to making you
              look and feel your best.
            </p>
          </motion.div>
          <motion.div
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
            className={styles.containerTwo}
          >
            <Link passHref href='#services'>
              <h4 className={styles.title}>Services</h4>
            </Link>
            <ul>
              <li className={styles.menuItem}>Hair Cuts</li>
              <li className={styles.menuItem}>Beards</li>
              <li className={styles.menuItem}>Children</li>
              <li className={styles.menuItem}>Women</li>
            </ul>
          </motion.div>
          <motion.div
            className={styles.containerOne}
            variants={fromUp}
            animate={controls}
            transition={{ duration: 0.5 }}
            className={styles.containerThree}
          >
            <Link passHref href='#about'>
              <h4 className={styles.title}>About</h4>
            </Link>
            <ul>
              <li className={styles.menuItem}>Certified Barber</li>
              <li className={styles.menuItem}>Sharpest Tools</li>
              <li className={styles.menuItem}>Strong Connections</li>
              <li className={styles.menuItem}>Classic Looks</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fromDown}
            animate={controls}
            transition={{ duration: 0.5 }}
            className={styles.containerFour}
          >
            <Link passHref href='#contact'>
              <h4 className={styles.title}>Contact</h4>
            </Link>
            <ul>
              <li className={styles.menuItem}>5100 w Camelback Rd</li>
              <li className={styles.menuItem}>623-334-8855</li>
              <li className={styles.menuItem}>octavious@gmail.com</li>
              <li className={styles.menuItem}>item 4</li>
            </ul>
          </motion.div>
        </div>
        <div className={styles.copyRight}>
          <small>Razor Edge Studio Copy Right 2022</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
