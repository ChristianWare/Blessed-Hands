import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Homearea.module.css";
import WorkImage from "../public/images/img2nobg.png";
import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";

function Homearea() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            <span className={styles.name}>Octavious'</span>{" "}
            <span className={styles.comapnyName}>Razor Edge Studio</span> Barber
            Shop
          </h1>
          <p className={styles.description}>
            The only place in the valley to get the sharpest cuts. From fades to
            flat tops, I've got you covered. Open Tuesday - Saturday 9AM - 6PM
          </p>
          <Link href='https://www.google.com/maps/dir//9100+W+Camelback+Rd,+Phoenix,+AZ+85037/@33.5087972,-112.2572024,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x872b401173e0876d:0xca0dcf3ad984ad85!2m2!1d-112.2550137!2d33.5087972!3e0'>
            <a target='_blank' className={styles.address}>
              Located at 9100 w Camelback Rd, ste 104
            </a>
          </Link>

          <div className={styles.buttonContainer}>
            <MainButton href='#services' text='my services' />
            <SecondaryButton href='#contact' text='contact info' />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.image}>
            <Image
              src={WorkImage}
              alt='Work Image'
              width={375}
              height={375}
              className={styles.imgBackground}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homearea;
