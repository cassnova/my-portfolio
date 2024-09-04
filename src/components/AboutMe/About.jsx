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
          ¡Hola! Soy Daniel Rojas Casanova, un desarrollador front-end apasionado por transformar ideas en interfaces digitales llamativas e impactantes.
        </p>
        <p>Llevo 2 años perfeccionando mis habilidades y creando soluciones web que cautivan a los usuarios. Mi sólida base en HTML, CSS, JavaScript y frameworks como Vue.js y React.js me permite convertir los diseños más complejos en experiencias interactivas y fluidas.</p>
        <p>Pero mi trabajo va más allá de simplemente escribir código. Gracias a mi formación en música y artes, tengo un ojo especial para los detalles que hacen que cada píxel cuente. Sé cómo componer interfaces que no solo funcionan a la perfección, sino que también cautivan visualmente.</p>
        <h5>Lo que puedo aportar a tu equipo:</h5>
        <ul>
          <li>Dominio de las últimas tendencias y tecnologías del desarrollo front-end</li>
          <li>Capacidad probada para transformar diseños creativos en código eficiente y visualmente impactante</li>
          <li>Habilidad para explicar conceptos técnicos de manera sencilla y amena, como si contara una historia</li>
          <li>Enfoque creativo y habilidad para resolver problemas de manera innovadora</li>
          <li>Facilidad para adaptarme al "lenguaje" de cada miembro del equipo, ya sea técnico, de diseño o de negocios</li>
        </ul>
        <p>Soy un experto en mi campo, pero nunca dejo de aprender. Me apasiona estar en constante evolución, explorando nuevas tecnologías y técnicas que me permitan llevar mis habilidades al siguiente nivel. Si buscas a alguien con sólidas capacidades técnicas, creatividad y ganas de aportar ideas frescas a tu proyecto, ¡creo que soy tu candidato ideal!</p>
      </div>

    </section>
  )
}

export default About;