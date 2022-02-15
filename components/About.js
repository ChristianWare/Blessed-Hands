import styles from "../styles/About.module.css";
import Title from "./Title";
// import Title from '../components/Title'

function About() {
  return (
    <div className={styles.aboutContainer}>
            <Title value1='About Me' value2='My Story' />
    
    </div>
  );
}

export default About;
