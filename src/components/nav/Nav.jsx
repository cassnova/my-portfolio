import React from "react";
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoDRCBLANCO from './LogoDRCBLANCO.png';

function NavBarMenu() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logoDRC" src={LogoDRCBLANCO} alt='Logo DRC' href="#header" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-item fs-6" href="#aboutMe">SOBRE MÍ</Nav.Link>
                        <Nav.Link className="nav-item fs-6" href="#projects">PROYECTOS</Nav.Link>
                        <Nav.Link className="nav-item fs-6" href="#skills">HABILIDADES TÉCNICAS</Nav.Link>
                        <Nav.Link className="nav-item fs-6" href="#footer">CONTACTO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarMenu;