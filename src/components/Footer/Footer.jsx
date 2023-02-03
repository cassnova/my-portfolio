import React from "react";
import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ContactForm from "../ContactForm/ContactForm";

function Footer() {
  return (
    <footer className="footer-container" id="footer">
      <h1 className="footer-title">CONVERSEMOS</h1>

      <ContactForm />

      <div className="icons-container">
        <a
          href="https://www.linkedin.com/in/daniel-rojas-casanova/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="icon-container" />
        </a>

        <a href="https://github.com/cassnova" target="_blank" rel="noreferrer">
          <AiFillGithub className="icon-container" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
