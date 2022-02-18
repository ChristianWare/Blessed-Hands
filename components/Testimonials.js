import React, { useState, useEffect } from "react";
import styles from "../styles/Testimonials.module.css";
import Title from "./Title";
import Image from "next/image";
import img1 from "../public/images/img2.jpg";
import data from "../src/data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Testimonials() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className={styles.testContainer} id='testimonials'>
      <Title value1='TESTIMONIALS' value2='What my clients Say About Me.' />
      <div className='section'>
        <div className='sectionCenter'>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }

            return (
              <article key={id} className={position}>
                <div className='imgbtnContainer'>
                  <button className='prev' onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft className='icon' />
                  </button>

                  <img src={image} alt={name} className='personImage' />
                  <button className='next' onClick={() => setIndex(index + 1)}>
                    <FiChevronRight className='icon' />
                  </button>
                </div>
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text' lang='en'>{quote}</p>
                <FaQuoteRight className='icon' />
              </article>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
