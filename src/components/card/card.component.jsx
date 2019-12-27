import React from "react";
import "./card.styles.css"

const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monsterCard.id}?set=set2&size=150x220`} />
        <h2>{props.monsterCard.name}</h2>
        <p>{props.monsterCard.email}</p>
    </div>
)

export default Card;