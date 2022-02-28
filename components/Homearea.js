import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Homearea.module.css";
import WorkImage from "../public/images/img2nobg.png";
import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";
import { motion } from "framer-motion";

function Homearea() {
  return (
    <motion.div
      animate={{ opacity: 1, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
      className={styles.homeContainer}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            <span className={styles.name}>Octavious&apos;</span>{" "}
            <span className={styles.comapnyName}>Razor Edge Studio</span> Barber
            Shop
          </h1>
          <p className={styles.description}>
            The only place in the valley to get the sharpest cuts. From fades to
            flat tops, I&apos;ve got you covered. Open Tuesday - Saturday 9AM -
            6PM
          </p>
          <Link href='https://www.google.com/maps/place/5100+N+99th+Ave,+Phoenix,+AZ+85037/@33.509981,-112.2757085,17z/data=!3m1!4b1!4m5!3m4!1s0x872b4172f9f02973:0x4dc3ba54f817a0fa!8m2!3d33.509981!4d-112.2735198'>
            <a target='_blank' className={styles.address}>
              Located at 5100 w Camelback Rd, ste 104
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
    </motion.div>
  );
}

export default Homearea;
