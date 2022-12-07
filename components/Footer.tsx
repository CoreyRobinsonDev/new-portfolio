import { BsArrowRightShort, BsGithub, BsTwitter } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.question__container}>
      <h2 className={styles.question}>Got a <strong className={styles["question--bold"]}>Role</strong> to Fill?</h2>
      <a className={styles.mailto_btn} href="mailto:coreyrob52@gmail.com">{"Let's Talk"} <BsArrowRightShort/></a>
    </div>
    <ul className={styles.list}>
      <li className={styles.links}>
        <div>
          <a className={styles.link__name} href="https://www.linkedin.com/in/coreycodes/" target="_blank" rel="noreferrer">LinkedIn</a>
          <p className={styles.link__username}>@coreycodes</p>
        </div>
       
        <a className={styles.link__icon} href="https://www.linkedin.com/in/coreycodes/" target="_blank" rel="noreferrer"><RiLinkedinFill/></a>
      </li>
      <li className={styles.links}>
        <div>
          <a className={styles.link__name} href="https://github.com/CoreyRobinsonDev" target="_blank" rel="noreferrer">Github</a>
          <p className={styles.link__username}>@coreyrobinsondev</p>
        </div>
        
        <a className={styles.link__icon} href="https://github.com/CoreyRobinsonDev" target="_blank" rel="noreferrer"><TbBrandGithub/></a>
      </li>
      <li className={styles.links}>
        <div>
          <a className={styles.link__name} href="https://twitter.com/corey_codes001" target="_blank" rel="noreferrer">Twitter</a>
          <p className={styles.link__username}>@corey_codes001</p>
        </div>
        
        <a className={styles.link__icon} href="https://twitter.com/corey_codes001" target="_blank" rel="noreferrer"><BsTwitter  /></a>
      </li>
    </ul>
  </footer>
}

export default Footer;