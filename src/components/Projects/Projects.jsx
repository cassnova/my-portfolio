import React from "react";
import './Projects.css'
import Card from "../Cards/Card";
import Data from "../../bd";

function Projects(props) {

    return (
        <main id="projects">
            <h2 className="title-elements">PROYECTOS</h2>
            <div className="container-main">
                {
                    props.data.map((value) => {
                        return (
                            <Card
                                photo={value.photo}
                                description={value.description}
                                title={value.title}
                                link={value.link}
                            />
                        )
                    })
                }
            </div>

            {/* <Card photo={Data[0].photo} description={Data[0].description} title={Data[0].title} link={Data[0].link} />
            <Card photo={Data[1].photo} description={Data[1].description} title={Data[1].title} link={Data[1].link} />
            <Card photo={Data[2].photo} description={Data[2].description} title={Data[2].title} link={Data[2].link} />
            <Card photo={Data[3].photo} description={Data[3].description} title={Data[3].title} link={Data[3].link} /> */}

        </main>
    )
}

export default Projects;