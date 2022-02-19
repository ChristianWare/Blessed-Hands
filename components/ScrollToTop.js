import React, { useState } from "react";
import { IoMdArrowUp } from "react-icons/io";
import styles from "../styles/ScrollToTop.module.css";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {visible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
          <IoMdArrowUp className={styles.icon} />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
