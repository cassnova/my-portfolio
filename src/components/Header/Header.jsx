import { render } from "@testing-library/react";
import React from "react";
import './Header.css'


function Header() {
    return (
        <header className="container-header">
            <h1>
                <span className="border">Daniel</span>
                <span className="border">Rojas</span>
                <span className="border">Casanova</span>
            </h1>
            <h1>
                <span className="wave">Daniel</span>
                <span className="wave">Rojas</span>
                <span className="wave">Casanova</span>
            </h1>

            <h2 className="fx">Front-End Developer</h2>

        </header>
    )
}

export default Header;