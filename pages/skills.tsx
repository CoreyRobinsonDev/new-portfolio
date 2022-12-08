import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../styles/Skills.module.css";

const skills = [
  {
    name: "HTML5",
    icon: "/imgs/icons/icons8-html-5-480.png"
  },
  {
    name: "CSS3",
    icon: "/imgs/icons/icons8-css3-480.png"
  },
  {
    name: "JavaScript",
    icon: "/imgs/icons/icons8-javascript-480.png"
  },
  {
    name: "TypeScript",
    icon: "/imgs/icons/icons8-typescript-480.png"
  },
  {
    name: "React",
    icon: "/imgs/icons/react (1).png"
  },
  {
    name: "NodeJS",
    icon: "/imgs/icons/icons8-node-js-480.png"
  },
  {
    name: "NextJS",
    icon: "/imgs/icons/next-js-icon.png"
  },
  {
    name: "SQL",
    icon: "/imgs/icons/sql.png"
  },
  {
    name: "Git",
    icon: "/imgs/icons/Git-Icon.png"
  },
  
  {
    name: "Vim",
    icon: "/imgs/icons/vim.png"
  },
  
]

const Skills = () => {
  return <>
    <header className={styles.header}></header>
    <section className={styles.container}>
      {skills.map((skill, key) => <Card key={key} {...skill} />)}
    </section>
  </>
}


function Card({icon, name}: {icon: string, name: string}) {
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const changeColor = () => {
    setTextColor("white");

    switch (name) {
      case "HTML5": return setBgColor("#e34c26");
      case "CSS3": return setBgColor("#264de4");
      case "JavaScript": return setBgColor("#f0db4f");
      case "TypeScript": return setBgColor("#007acc");
      case "React": return setBgColor("#61dbfb");
      case "NodeJS": return setBgColor("#3c873a");
      case "NextJS": return setBgColor("#333");
      case "SQL": return setBgColor("#333");
      case "Git": return setBgColor("#F1502F");
      case "Vim": return setBgColor("#7EBF50");
    }
  }

  const resetColor = () => {
    setBgColor("#eee");
    setTextColor("black")
  }

  return <motion.article className={styles.card} animate={{ backgroundColor: bgColor }} onMouseEnter={() => changeColor()} onMouseLeave={() => resetColor()}>
    <Image
      className={`${styles.img} ${styles[name]}`}
      src={icon}
      alt={`${name} icon`}  
      width={80}
      height={80}
    />
    <motion.h2 className={styles.name} animate={{color: textColor}}>{name}</motion.h2>
  </motion.article>
}
export default Skills;