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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            soluta architecto numquam dolorum voluptas, eligendi voluptatum
            itaque veniam quo in iste facilis at culpa, ipsa nisi quam porro
            consequuntur similique?
          </p>
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
              className={styles.test}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homearea;
