import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`footer mt-auto py-3 ${
        isDarkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center gap-2">
        <span className="footer-text">Developed by Madhav P with ❤️</span>

        <div className="footer-social d-flex gap-3 justify-content-center">
          <a
            href="https://github.com/Madhav-P-2005"
            target="_blank"
            rel="noopener noreferrer"
            className={isDarkMode ? "text-light" : "text-dark"}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/madhav-p-156b9b290/"
            target="_blank"
            rel="noopener noreferrer"
            className={isDarkMode ? "text-light" : "text-dark"}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:madhavp2023@gmail.com"
            className={isDarkMode ? "text-light" : "text-dark"}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://discord.gg/dReaKKZpzr"
            target="_blank"
            rel="noopener noreferrer"
            className={isDarkMode ? "text-light" : "text-dark"}
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;