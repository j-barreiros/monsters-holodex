// Styles
import './card.styles.css';

// Type
import { Monster } from '../App';

type CardProps = {
    monster: Monster;
}

const Card = ({monster} : CardProps) => {
    const { id, name, email } = monster;

    return (
        <article className="card-container" key={id}>
            <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <h1>{name}</h1>
            <p>{email}</p>
        </article>
    )
}
export default Card;