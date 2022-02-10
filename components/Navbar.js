import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import MainButton from "./MainButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Link href='/' passHref>
            <a>
              <Image
                src='/images/bhlogo.svg'
                alt='logo'
                width={100}
                height={100}
              />
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
            <Link href='/'>
              <a onClick={openMenu}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu}>Services</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu}>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/'>
              <a onClick={openMenu}>Contact</a>
            </Link>
          </li>
        </ul>
        <MainButton />
        <span onClick={openMenu} className={ isOpen === false ? styles.hamburger : styles.hamburger + " " + styles.active}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
