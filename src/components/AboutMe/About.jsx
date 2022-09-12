import React from "react";
import { useEffect, useState } from "react";
import './About.css'


function About() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <section className="sec-container" id="aboutMe">
            <h2 style={{ transform: `translateY(${offsetY * 0.3}px)` }}>SOBRE MÍ</h2>
            <div>
                <p>
                    ¡Hola! Mi nombre es Daniel Rojas Casanova, actualmente vivo en la ciudad de Viña del Mar, Quinta Región de Chile y soy Desarrollador web front-end.

                    Me apasiona la tecnología, la innovación y desarrollar proyectos de forma creativa. Para ello, utilizo distintas tecnologías tales como HTML, CSS, Javascript, ReactJS, Diseño Responsivo, APls, Firebase, Git, Github, Bootstrap, Wordpress, Visual Studio Code, entre otros.

                    Disfruto trabajar en equipo, ya sea con clientes y asociados, o bien siendo parte de una empresa. Creo que es fundamental el diálogo, apreciar cada punto de vista, potenciar las fortalezas de cada integrante y agrupar los conceptos recogidos para desarrollar una gran idea que culmine en proyectos exitosos.
                    En cuanto a otras de mis habilidades, estudié inglés en California, logrando el nivel C1. Además, viviendo en otro país he aprendido a adaptarme fácilmente a distintos tipos de situaciones difíciles, con resiliencia y optimismo.

                    Hoy en día sigo perfeccionando mis habilidades y me esfuerzo por adquirir conocimientos en herramientas y tecnologías que me permitan crecer tanto en lo profesional como también en lo personal.
                </p>
            </div>

        </section>
    )
}

export default About;