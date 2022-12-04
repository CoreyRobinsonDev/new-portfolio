import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import FX from "../styles/FX.module.css";

const Navbar = () => {
  return <nav className={styles.container}>
    <ul className={styles.list}>
      <li className={styles.list_item}><Link href="/" className={FX["double-hover"]}>Home</Link></li>
      <li className={styles.list_item}><Link href="/" className={FX["double-hover"]}>Projects</Link></li>
      <li className={styles.list_item}><Link href="/" className={FX["double-hover"]}>Skills</Link></li>
      <li className={styles.list_item}><Link href="#contact" className={FX["double-hover"]}>Contact</Link></li>
    </ul>
  </nav>
}

export default Navbar;