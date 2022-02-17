import React, { useState, useEffect } from "react";
import styles from "../styles/Testimonials.module.css";
import Title from "./Title";
import data from "../src/data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Testimonials({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.testContainer}>
      <Title value1='TESTIMONIALS' value2='What People Say About Me' />
      <div className={styles.section}>
        <FaArrowCircleLeft className={styles.leftArrow} onClick={prevSlide} />
        <FaArrowCircleRight className={styles.rightArrow} onClick={nextSlide} />
        {data.map((slide, index) => {
          return (
            <div
              className={index === current ? styles.slideActive : styles.slide}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='image' className={styles.image} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
