import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import FX from "../styles/FX.module.css";
import { BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  return <>
    <Head>
      <title>Corey Robinson | Home</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
    <section className={styles.container}>
      <div className={styles.backdrop}>
        <h2 className={styles.title}>FRONT-END ENGINEER</h2>
        <h1 className={styles.name}>COREY ROBINSON</h1>
        <p className={styles.description}>{"I solve business problems with front-end solutions. I find passion in building responsive, accessible, and search-engine-optimized web apps, always looking ahead and ready to learn new things."}</p>
        <Link href="/projects" className={`${styles.link} ${FX.hover}`}><span className={styles.link__circle}><BsArrowRightShort /></span>Jump To Projects</Link>
      </div>
    </section>
  </>
}
