import "./Item.css"
import { Link} from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {

    return (
        <div className="CardDiv">
            <article className="Card">
            <picture>
                <img src={img} alt={name} className="CardImg"/>
            </picture>
            <header className="CardHeader">
                <h2 className="CardHeaderItem">
                    {name}
                </h2>
            </header>
            <section>
                <p className="CardInfo">
                    Precio: ${price}
                </p>
                <p className="CardInfo">
                    Available Stock: {stock}
                </p>
            </section>
            <footer className="CardFooter">
                <Link to={`/item/${id}`} className="Button">View Details</Link>
            </footer>
        </article>
        </div>
    )
    
}

export default Item