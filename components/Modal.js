import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import { MdClose } from "react-icons/md";

export default function Modal({ show, onClose, text1, text2 }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);
  

  const handleClose = (e) => {
      e.preventDefault();
      onClose();
  }

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <MdClose onClick={handleClose} className={styles.icon} />
        </div>
        <h2 className={styles.text1}>{text1}</h2>
        <p className={styles.text2}>{text2}</p>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modalRoot")
    );
  } else {
    return null;
  }
}
