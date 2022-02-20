import Head from "next/head";
import Navbar from "../components/Navbar";
import Homearea from "../components/Homearea";
import Services from "../components/Services";
import About from "../components/About";
import styles from "../styles/Home.module.css";
import Photos from "../components/Photos";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Razor Edge Studio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <motion.div initial='hidden' animate='show'>
        <ScrollToTop />
        <Navbar />
        <Homearea />
        <Services />
        <About />
        <Photos />
        <Testimonials />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}
