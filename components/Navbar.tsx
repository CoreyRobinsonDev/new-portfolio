import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import FX from "../styles/FX.module.css";

const Navbar = () => {
  const addClass = (e: any) => {
    e.target.parentNode.parentNode.childNodes.forEach((child: any) => child.children[0].classList.remove(styles.focus))
    e.target.classList.add(styles.focus);
  }

  return <nav className={styles.container}>
    <ul className={styles.list}>
      <li className={styles.list_item}><Link href="/" className={FX["double-hover"]} onClick={(e) => addClass(e)}>Home</Link></li>
      <li className={styles.list_item}><Link href="/projects" className={FX["double-hover"]} onClick={(e) => addClass(e)}>Projects</Link></li>
      <li className={styles.list_item}><Link href="/skills" className={FX["double-hover"]} onClick={(e) => addClass(e)}>Skills</Link></li>
      <li className={styles.list_item}><Link href="#contact" className={FX["double-hover"]} onClick={(e) => addClass(e)}>Contact</Link></li>
    </ul>
  </nav>
}

export default Navbar;