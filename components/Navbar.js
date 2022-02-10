import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";


function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarBrand}>
      <Image src='/images/bhlogo.svg' width={100} height={100} />
      </div>
    </nav>
  );
}

export default Navbar;
