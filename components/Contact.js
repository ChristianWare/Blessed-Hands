import Image from "next/image";
import styles from "../styles/Contact.module.css";
import Title from "./Title";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import background from '../public/images/contact.jpeg'

function Contact() {
  return (
    <div className={styles.contactContainer} id='contact'>
      <Title value1='contact' value2='Lets get in touch.' />
      <div className={styles.contactContent}>
        <div className={styles.left}>
        <h4>(Seriously)</h4>
          <h2>Feel Free to Reach Out Anytime</h2>
          <div className={styles.infoContainer}>
            <div className={styles.addressContainer}>
              <MdOutlineLocationOn className={styles.icon} />
              <div className={styles.address}>
                <h3 className={styles.heading}>Address</h3>
                <p className={styles.headingInfo}>
                  <span className={styles.addressWhiteSpace}>
                    9100 w Camelback Rd, ste 104
                  </span>
                   Phoenix, AZ 85396
                </p>
              </div>
            </div>
            <div className={styles.phoneContainer}>
              <BsTelephoneForward className={styles.icon} />
              <div className={styles.address}>
                <h3 className={styles.heading}>Phone</h3>
                <p className={styles.headingInfo}>623-334-8855</p>
              </div>
            </div>
            <div className={styles.emailContainer}>
              <AiOutlineMail className={styles.icon} />
              <div className={styles.address}>
                <h3 className={styles.heading}>Email</h3>
                <p className={styles.headingInfo}>octavious@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <Image
              src={background}
              alt='background'
              layout='fill'
              objectFit='cover'
              className={styles.picture}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
