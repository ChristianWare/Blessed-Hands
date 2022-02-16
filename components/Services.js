import React, { useState, } from "react";
import styles from "../styles/Services.module.css";
import Modal from "./Modal";
 
import Title from "./Title";

function Services() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  return (
    <div className={styles.servicesContainer} id='services'>
      <div className={styles.titleContainer}>
        <Title value1='My Services' value2='All Styles. Any Design' />
      </div>
      <div className={styles.categories}>
        <button onClick={() => setShowModal1(true)}>Hair Cuts</button>
        <button onClick={() => setShowModal2(true)}>Beards</button>
        <button onClick={() => setShowModal3(true)}>Shaves</button>
        <button onClick={() => setShowModal4(true)}>Line Ups</button>
        <button onClick={() => setShowModal5(true)}>Children</button>
        <button onClick={() => setShowModal6(true)}>Woman</button>
        <Modal
          show={showModal1}
          onClose={() => setShowModal1(false)}
          text1='hair cuts'
          text2='I can cut your hair in any style you want. There isnt a style i havent seen. From fades to flat tops, Ive got you covered.'
        />
        <Modal
          show={showModal2}
          onClose={() => setShowModal2(false)}
          text1='beards'
          text2='Beard grooming has never been so easy. Let a professional do it, and I will keep your facial hair looking resplendent.'
        />
        <Modal
          show={showModal3}
          onClose={() => setShowModal3(false)}
          text1='shaves'
          text2='Knowing your way around a razor is no small feat. I will give you that Don Draper glow through a careful, considered approach and a repeatable routine.'
        />
        <Modal
          show={showModal4}
          onClose={() => setShowModal4(false)}
          text1='Line Ups'
          text2='Next to the fade, a hot addition to any hairstyle is a line up. Also known as an edge up, shape up or lineup, this cut defines the hairline into straight lines and right angles.'
        />
        <Modal
          show={showModal5}
          onClose={() => setShowModal5(false)}
          text1='children'
          text2='Kids welcome! I will work with you and your children to give them the best cut possible.'
        />
        <Modal
          show={showModal6}
          onClose={() => setShowModal6(false)}
          text1='women'
          text2='I have a number of female clients who I have been working with for years. So if you are looking for a trim, come see me.'
        />
      </div>
    </div>
  );
}

export default Services;
