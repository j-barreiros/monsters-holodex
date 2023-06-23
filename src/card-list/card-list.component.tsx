// Styles
import './card-list.styles.css'
// Type
import { Monster } from "../App";
// Components
import Card from "../card/card.component";

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({monsters} : CardListProps) => {
    return (
        <section className="card-list">
            {
                monsters.map((m : Monster) => {
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