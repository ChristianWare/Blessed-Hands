import Head from "next/head";
import Navbar from "../components/Navbar";
import Homearea from "../components/Homearea";
import Services from "../components/Services";
import About from "../components/About";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Razor Edge Studio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Homearea />
      <Services />
      <About />
    </div>
  );
}
