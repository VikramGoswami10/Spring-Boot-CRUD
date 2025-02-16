import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-3 bg-light border-top mt-auto">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span className="text-muted">© Vikram Goswami</span>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a
              href="https://www.instagram.com/vikram10_/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-muted"
            >
              <FaInstagram size={22} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/vikramgoswami101101/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-muted"
            >
              <FaLinkedin size={22} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/VikramGoswami10/Spring-Boot-CRUD.git"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-muted"
            >
              <FaGithub size={22} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
