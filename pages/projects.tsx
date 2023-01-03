import { BsArrowRightShort,BsGlobe } from "react-icons/bs";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

import styles from "../styles/Projects.module.css";

const projects = [
  {
    name: "Ecommerce",
    tech: ["React", "Redux", "CSS", "NextJS"],
    summary: "An ecommerce front-end shell.",
    features: [
      "3 clothing categories pages",
      "Contact, about, and faq pages",
      "Cart"
    ],
    site: "https://ecommerce-crd.vercel.app/",
    code: "https://github.com/CoreyRobinsonDev/ecommerce",
    gif: "/gifs/ecommerce.gif",
  },
  {
    name: "Mars Gallery",
    tech: ["React", "TypeScript", "Emotion"],
    summary: "A web app designed to show and analyze a given chess position while providing top Masters games in that position.",
    features: [
      "Users can select and retrieve mission info on a given rover.",
      "Users can select photos based on the martian day they were taken.",
    ],
    site: "https://mars-gallery-crd.netlify.app/",
    code: "https://github.com/CoreyRobinsonDev/mars-gallery",
    gif: "/gifs/mars-gallery-gif.gif",
  },
  {
    name: "Chess Openings",
    tech: ["React", "Redux", "CSS"],
    summary: "A web app designed to show and analyze a given chess position while providing top Masters games in that position.",
    features: [
      "Users can find top Masters games from a given chess position.",
      "Users can evaluate a given chess position.",
      "Users can see the win rate of a chess opening by color."
    ],
    site: "https://chess-openings-crd.netlify.app/",
    code: "https://github.com/CoreyRobinsonDev/chess-openings",
    gif: "/gifs/chess-openings-gif.gif",
  },
]

const Projects = () => {
  return <>
    <Head>
      <title>Corey Robinson | Projects</title>
    </Head>
    <header className={styles.header}></header>
    <section className={styles.container}>
      <ul className={styles.projects}>
        {projects.map((project, i) => <Card key={i} {...project}/>)}
      </ul>
    </section>
  </>
}

function Card({ name, tech, summary, features, site, code, gif }
  : { name: string, tech: string[], summary: string, features: string[], site: string, code: string, gif: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return <li className={styles.project}>
    <motion.div className={styles.link} onMouseEnter={()=> setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)}>
      <a className={styles.project__head} href={site} target="_blank" rel="noreferrer">
        <h2 className={styles.project__name}>{name}</h2>
      <ul className={styles.tech}>
          {tech.map((name, i) => <li key={i} className={styles.tech__name}>{name}</li>)}
      </ul>
      <span className={styles.arrow}><BsArrowRightShort/></span>
    </a>
      <motion.div className={styles.project__body} transition={{ type: "tween", duration: .5 }} animate={{ height: isExpanded ? "40rem" : 0}}>
        <embed className={styles.gif} src={gif}></embed>
        <div className={styles.project__description}>
          <p className={styles.description__info}>{summary}</p>
          <ul>
          <h3 className={styles.description__feature__header}>Features</h3>
            {features.map((description, i) => <li key={i} className={styles.description__feature__item}>{ description }</li>)} 
          </ul>
          <div className={styles.description__link__container}>
            <a className={styles.description__link} href={code} target="_blank" rel="noreferrer" title="Github"><TbBrandGithub/></a>
          <a className={styles.description__link} href={site} target="_blank" rel="noreferrer"><BsGlobe/></a>
          </div>
        </div>
    </motion.div>
    </motion.div>
  </li>
}

export default Projects;