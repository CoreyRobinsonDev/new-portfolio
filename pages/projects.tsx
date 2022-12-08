import { BsArrowRightShort,BsGlobe } from "react-icons/bs";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../styles/Projects.module.css";

const Projects = () => {
  const [marsHeight, setMarsHeight] = useState(0);
  const [chessHeight, setChessHeight] = useState(0);
  const marsHeightExpanded = 350;
  const chessHeightExpanded = 400;

  return <>
    <header className={styles.header}>
    </header>
    <section className={styles.container}>
      <ul className={styles.projects}>
        <li className={styles.project}>
          <motion.a className={styles.link} href="https://mars-gallery-crd.netlify.app/" target="_blank" rel="noreferrer" onMouseEnter={()=> setMarsHeight(marsHeightExpanded)} onMouseLeave={() => setMarsHeight(0)}>
            <div className={styles.project__head}>
              <h2 className={styles.project__name}>Mars Gallery</h2>
              <ul className={styles.tech}>
                <li className={styles.tech__name}>React</li>
                <li className={styles.tech__name}>TypeScript</li>
                <li className={styles.tech__name}>Emotion</li>
              </ul>
              <span className={styles.arrow}><BsArrowRightShort/></span>
            </div>
            <motion.div className={styles.project__body} animate={{height: marsHeight}}>
              <embed className={styles.gif} src="/gifs/mars-gallery-gif.gif"></embed>
              <div className={styles.project__description}>
                <p className={styles.description__info}>{"A simple website for searching photos taken on Mars using NASA's Mars Rover Photos api."}</p>
                <ul>
                <h3 className={styles.description__feature__header}>Features</h3>
                  <li className={styles.description__feature__item}>Users can select and retrieve mission info on a given rover.</li>
                  <li className={styles.description__feature__item}>Users can select photos based on the martian day they were taken.</li>
                </ul>
                <div className={styles.description__link__container}>
                  <a className={styles.description__link} href="https://github.com/CoreyRobinsonDev/mars-gallery" target="_blank" rel="noreferrer"><TbBrandGithub/></a>
                <a className={styles.description__link} href="https://mars-gallery-crd.netlify.app/" target="_blank" rel="noreferrer"><BsGlobe/></a>
                </div>
              </div>
            </motion.div>
          </motion.a>
        </li>
        <li className={styles.project}>
          <motion.a className={styles.link} href="https://chess-openings-crd.netlify.app/" target="_blank" rel="noreferrer" onMouseEnter={()=> setChessHeight(chessHeightExpanded)} onMouseLeave={() => setChessHeight(0)}>
            <div className={styles.project__head}>
            <h2 className={styles.project__name}>Chess Openings</h2>
            <ul className={styles.tech}>
              <li className={styles.tech__name}>React</li>
              <li className={styles.tech__name}>Redux</li>
              <li className={styles.tech__name}>CSS</li>
            </ul>
            <span className={styles.arrow}><BsArrowRightShort/></span>
          </div>
            <motion.div className={styles.project__body} animate={{ height: chessHeight }}>
              <embed className={styles.gif} src="/gifs/chess-openings-gif.gif"></embed>
              <div className={styles.project__description}>
                <p className={styles.description__info}>{"A web app designed to show and analyze a given chess position while providing top Masters games in that position."}</p>
                <ul>
                <h3 className={styles.description__feature__header}>Features</h3>
                  <li className={styles.description__feature__item}>Users can find top Masters games from a given chess position.</li>
                  <li className={styles.description__feature__item}>Users can evaluate a given chess position.</li>
                  <li className={styles.description__feature__item}>Users can see the win rate of a chess opening by color.</li>
                </ul>
                <div className={styles.description__link__container}>
                  <a className={styles.description__link} href="https://github.com/CoreyRobinsonDev/chess-openings" target="_blank" rel="noreferrer"><TbBrandGithub/></a>
                <a className={styles.description__link} href="https://chess-openings-crd.netlify.app/" target="_blank" rel="noreferrer"><BsGlobe/></a>
                </div>
              </div>
              
          </motion.div>
          </motion.a>
        </li>
      </ul>
    </section>
  </>
}

export default Projects;