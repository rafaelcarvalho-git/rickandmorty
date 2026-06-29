import "./Footer.css";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-dark py-3">
      <div className="container d-flex flex-wrap">
        <div className="mx-auto align-self-center">
          <a
            id="name"
            target="_blank"
            href="https://rafael-carvalho-dev.vercel.app/"
            rel="noopener noreferrer"
          >
            &copy; 2026 - Rafael Carvalho
          </a>
        </div>
        <div className="social mx-auto d-flex">
          <a
            id="wpp"
            className="social-icon"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5588996814509&text&app_absent=0"
            rel="noopener noreferrer"
          >
            <BsWhatsapp />
          </a>
          <a
            id="ins"
            className="social-icon"
            target="_blank"
            href="https://www.instagram.com/rafaelcarvalho.js/"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            id="git"
            className="social-icon"
            target="_blank"
            href="https://github.com/rafaelcarvalho-git"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            id="lkd"
            className="social-icon"
            target="_blank"
            href="https://www.linkedin.com/in/rafaelcarvalho-ti/"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
