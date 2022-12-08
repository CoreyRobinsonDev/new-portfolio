import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "../styles/Navbar.module.css";
import FX from "../styles/FX.module.css";

const Navbar = () => {
  const addClass = (e: any) => {
    e.target.parentNode.parentNode.childNodes.forEach((child: any) => child.children[0].classList.remove(styles.focus))
    e.target.classList.add(styles.focus);
  }

  const { scrollY } = useScroll()
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [y, setY] = useState(0);
  

  useEffect(() => {
    return scrollY.onChange((latest) => {
      latest >= 100 ? setIsCollapsed(true) : setIsCollapsed(false);
      setY(latest)
    })
  }, [scrollY])

  const animate = isCollapsed
    ? { y: -60, opacity: 0 }
    : { y: 0, opacity: 1 };
  const bars = isCollapsed
    ? { y: -70, opacity: 1 }
    : { y: -130, opacity: 0 };
  
  return <nav className={`${styles.container}`}>
    <motion.ul className={styles.list} animate={{color: y >= 100 ? "black" : "white"}} onMouseEnter={() => setIsCollapsed(false)} onMouseLeave={() => y >= 100 ? setIsCollapsed(true) : null}>
      <motion.li className={styles.list_item} animate={animate}><Link href="/" className={FX["double-hover"]} onClick={(e) => addClass(e)}>Home</Link></motion.li>
      <motion.li className={styles.list_item} animate={animate}><Link href="/projects" className={FX["double-hover"]} onClick={(e) => addClass(e)}>Projects</Link></motion.li>
      <motion.li className={styles.list_item} animate={animate}><Link href="/skills" className={FX["double-hover"]} onClick={(e) => addClass(e)}>Skills</Link></motion.li>
      <motion.li className={styles.list_item} animate={animate}><Link href="#contact" className={FX["double-hover"]} onClick={(e) => addClass(e)}>Contact</Link></motion.li>
    </motion.ul>
    <motion.hr className={styles.bar} animate={bars}></motion.hr>
    <motion.hr className={styles.bar} animate={bars}></motion.hr>
  </nav>
}

export default Navbar;