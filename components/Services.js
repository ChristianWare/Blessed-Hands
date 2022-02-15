import React, { useState, } from "react";
import styles from "../styles/Services.module.css";
import Modal from "./Modal";
import Title from "./Title";

function Services() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.servicesContainer} id='services'>
      <div className={styles.titleContainer}>
        <Title value1='My Services' value2='All Styles. Any Design' />
      </div>
      <div className={styles.categories}>
        <button onClick={() => setShowModal(true)} className={styles.modalTest}>Hair Cuts</button>
        <button>Beards</button>
        <button>Shaves</button>
        <button>Line Ups</button>
        <button>Children</button>
        <button>Woman</button>
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          text1='hair cuts'
          text2='I can cut your hair in any style you want. There isnt a style i havent seen. From fades to flat tops, Ive got you covered.'
        />
      </div>
    </div>
  );
}

export default Services;
