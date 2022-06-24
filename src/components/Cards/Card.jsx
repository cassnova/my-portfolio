import React from "react";
import Data from "../../bd";
import './Card.css'

function Card(props) {
    return (

        <div className="card-container">

            <div className="img-container">
                <img src={props.photo} alt={props.title} />
            </div>

            <div
                className="description-container">
                <p>{props.description}</p>
                <a href={props.link}>Visit Website</a>
            </div>

        </div>
    )
}

export default Card;