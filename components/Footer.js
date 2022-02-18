import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import MainButton from "./MainButton";
import Title from "./Title";
import logo from "../public/images/bhlogo.svg";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";


function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.top}>
        <Title value1='RAZOR EDGE STUDIO' value2='satisfation guarenteed.' />
        <div className={styles.btnContainer}>
          <MainButton href='tel:623-334-8855' text='623-334-8855' />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.footerContent}>
          <div className={styles.containerOne}>
            <div className={styles.logoContainer}>
              <Link href='/' passHref>
                <a>
                  <Image src={logo} alt='logo' />
                </a>
              </Link>
            </div>
            <p className={styles.conOneDescription} lang='en'>
              The only place in the valley to get the sharpest cuts. From fades
              to flat tops, I've got you covered. I create a relaxed environment
              for all my clients and looks forward to making you look and feel
              your best.
            </p>
            
          </div>
          <div className={styles.containerTwo}>
            <Link href='#services'>
              <h4 className={styles.title}>Services</h4>
            </Link>
            <ul>
              <li className={styles.menuItem}>Hair Cuts</li>
              <li className={styles.menuItem}>Beards</li>
              <li className={styles.menuItem}>Children</li>
              <li className={styles.menuItem}>Women</li>
            </ul>
          </div>
          <div className={styles.containerThree}>
            <Link href='#about'>
              <h4 className={styles.title}>About</h4>
            </Link>
            <ul>
              <li className={styles.menuItem}>Certified Barber</li>
              <li className={styles.menuItem}>Sharpest Tools</li>
              <li className={styles.menuItem}>Strong Connections</li>
              <li className={styles.menuItem}>Classic Looks</li>
            </ul>
          </div>
          <div className={styles.containerFour}>
            <Link href='#contact'>
              <h4 className={styles.title}>Contact</h4>
            </Link>
            <ul>
              <li className={styles.menuItem}>5100 w Camelback Rd</li>
              <li className={styles.menuItem}>623-334-8855</li>
              <li className={styles.menuItem}>octavious@gmail.com</li>
              <li className={styles.menuItem}>item 4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
