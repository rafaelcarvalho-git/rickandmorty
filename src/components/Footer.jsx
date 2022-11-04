import styles from './Footer.css'
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

function Footer() {
    return (
      <footer className="bg-dark py-3">
        <div className="container d-flex flex-wrap">
          <div className="mx-auto align-self-center">
            <a id={styles.name} target="_blank" href="https://rafaelcarvalho-dev.web.app/">&copy; 2022 - Rafael Carvalho</a>
          </div>
          <div className="mx-auto d-flex">
            <a id={styles.wpp} className={styles.social_icon} target="_blank" href="https://api.whatsapp.com/send/?phone=5588988573004&text&app_absent=0"><BsWhatsapp /></a>
            <a id={styles.ins} className={styles.social_icon} target="_blank" href="https://www.instagram.com/rafaelcarvalho.py/"><BsInstagram /></a>
            <a id={styles.git} className={styles.social_icon} target="_blank" href="https://github.com/rafaelcarvalho-git"><BsGithub /></a>
            <a id={styles.lkd} className={styles.social_icon} target="_blank" href="https://www.linkedin.com/in/rafaelcarvalho-ti/"><BsLinkedin /></a>
          </div>
        </div>
      </footer>
    )
}

export default Footer