import React from "react";
import "./Projects.css";
import Card from "../Cards/Card";

function Projects(props) {
  return (
    <main id="projects">
      <h2 className="title-elements">PROYECTOS</h2>
      <div className="container-main">
        {props.data.map((value) => {
          return (
            <Card
              photo={value.photo}
              description={value.description}
              title={value.title}
              link={value.link}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Projects;
