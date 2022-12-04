import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import FX from "../styles/FX.module.css";
import { BsArrowRightShort } from "react-icons/bs";

export default function Home() {
  return <>
    <Head>
      <title>Corey Robinson | Home</title>
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
