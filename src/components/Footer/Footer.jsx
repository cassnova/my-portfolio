import React from "react";
import './Footer.css'
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai';

function Footer() {
    return (
        <footer className="footer-container" id="footer">

            <h1 className="footer-title">CONVERSEMOS</h1>

            <div className="icons-container">

                <a href="https://www.instagram.com/cassnova_/" target="_blank">
                    <AiFillInstagram className="icon-container" />
                </a>

                <a href="https://www.linkedin.com/in/daniel-rojas-casanova/" target="_blank">
                    <AiFillLinkedin className="icon-container" />
                </a>

                <a href="https://web.facebook.com/leinad.drc/" target="_blank">
                    <AiFillFacebook className="icon-container" />
                </a>

                <a href="https://github.com/cassnova" target="_blank">
                    <AiFillGithub className="icon-container" />
                </a>

            </div>
        </footer>

    )
};

export default Footer;