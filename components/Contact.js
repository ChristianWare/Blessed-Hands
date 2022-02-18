import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import Title from "./Title";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import background from "../public/images/contact.jpeg";

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
              <Link href='https://www.google.com/maps/place/5100+N+99th+Ave,+Phoenix,+AZ+85037/@33.509981,-112.2757085,17z/data=!3m1!4b1!4m5!3m4!1s0x872b4172f9f02973:0x4dc3ba54f817a0fa!8m2!3d33.509981!4d-112.2735198'>
                <a target='_blank'>
                  <MdOutlineLocationOn className={styles.icon} />
                </a>
              </Link>
              <div className={styles.address}>
                <h3 className={styles.heading}>Address</h3>
                <p className={styles.headingInfo}>
                  <span className={styles.addressWhiteSpace}>
                    5100 w Camelback Rd, ste 104
                  </span>
                  Phoenix, AZ 85396
                </p>
              </div>
            </div>
            <div className={styles.phoneContainer}>
              <Link href='tel:623-334-8855'>
                <a>
                  <BsTelephoneForward className={styles.icon} />
                </a>
              </Link>
              <div className={styles.address}>
                <h3 className={styles.heading}>Phone</h3>
                <p className={styles.headingInfo}>623-334-8855</p>
              </div>
            </div>
            <div className={styles.emailContainer}>
              <Link href='mailto:octavious@gmail.com'>
                <a>
                  <AiOutlineMail className={styles.icon} />
                </a>
              </Link>
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
