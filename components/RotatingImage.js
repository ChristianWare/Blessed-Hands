import styles from "../styles/RotatingImage.module.css";
import Image from "next/image";

function RotatingImage() {
  return (
    <div className={styles.ellipseContainer}>
      <div className={`${styles.ellipse} ${styles.thin}`}></div>
      <div className={`${styles.ellipse} ${styles.thick}`}>
        <Image
          src='/images/img2nobg.png'
          width={600}
          height={600}
          objectFit='contain'
        />
      </div>
      <div className={`${styles.ellipse} ${styles.yellow}`}></div>
    </div>
  );
}

export default RotatingImage;
