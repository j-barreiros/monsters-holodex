import { Component } from "react";
import Card from "../card/card.component";

// Styles
import './card-list.styles.css'

const CardList = ({ monsters }) => {
    return (
        <section className="card-list">
            {
                monsters.map(m => {
                    return (
                        <Card
                            monster={m}
                        />
                    )
                })
            }
        </section>
    )
}

export default CardList;