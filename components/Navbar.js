import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import MainButton from "./MainButton";
import logo from "../public/images/logodark.svg";
import { motion } from "framer-motion";
import { navbarAnimation } from "../components/Animation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      variants={navbarAnimation}
      transition={{ delay: 0.2 }}
      className={styles.header}
    >
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href='/' passHref>
            <a>
              <Image src={logo} alt='logo' />
            </a>
          </Link>
        </div>
        <ul
          onClick={openMenu}
          className={
            isOpen === false
              ? styles.navMenu
              : styles.navMenu + " " + styles.active
          }
        >
          <li className={styles.navItem}>
            <Link href='#services'>
              <a onClick={openMenu}>My Services</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#about'>
              <a onClick={openMenu}>About Me</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#photos'>
              <a onClick={openMenu}>Photos</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#testimonials'>
              <a onClick={openMenu}>Testimonials</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='#contact'>
              <a onClick={openMenu}>Contact Info</a>
            </Link>
          </li>
          <li className={styles.contactBtnMBL}>
            <MainButton href='tel:623-334-8855' text='623-334-8855' />
          </li>
        </ul>
        <div className={styles.contactBtnDT}>
          <MainButton href='tel:623-334-8855' text='623-334-8855' />
        </div>
        <span
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </span>
      </nav>
    </motion.header>
  );
}

export default Navbar;
