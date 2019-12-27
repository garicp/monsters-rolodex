import React from "react";
import Card from "../card/card.component"
import "./card-list.styles.css"

const CardList = props => (
    <div className="card-list">
        {props.monstersCardList.map(monster => (
            <Card key={monster.id} monsterCard={monster} />
        ))
        }
    </div>
);

export default CardList;