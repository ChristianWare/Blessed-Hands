import Image from "next/image";
import styles from "../styles/Photos.module.css";
import Title from "./Title";
import img1 from "../public/images/img1.jpeg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpeg";
import img4 from "../public/images/img4.jpg";
import img5 from "../public/images/img5.jpg";
import img6 from "../public/images/img6.jpg";
import img7 from "../public/images/img7.jpg";
import img8 from "../public/images/img8.jpg";
import img9 from "../public/images/img9.jpg";
import img10 from "../public/images/img10.jpeg";

function Photos() {
  return (
    <div className={styles.photoContainer} id='photos'>
      <div className={styles.titleContainer}>
        <Title value1='Photos' value2='Some Examples of My Work' />
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainerLarge}>
          <Image
            src={img2}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.imageContainerSmall}>
          <Image
            src={img3}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.imageContainerSmall}>
          <Image
            src={img4}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.imageContainerSmall}>
          <Image
            src={img5}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.imageContainerSmall}>
          <Image
            src={img6}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.imageContainerLarge2}>
          <Image
            src={img1}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.imageContainerSmall2}>
          <Image
            src={img7}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.imageContainerSmall2}>
          <Image
            src={img8}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.imageContainerSmall2}>
          <Image
            src={img9}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
        <div className={styles.imageContainerSmall2}>
          <Image
            src={img10}
            alt='Hair Cut Exampel 1'
            layout='fill'
            objectFit='cover'
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default Photos;
