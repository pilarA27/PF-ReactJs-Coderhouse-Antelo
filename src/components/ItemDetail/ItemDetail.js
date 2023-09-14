import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock}) => {
    const[quantityAdded, SetQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext);

    const handleOnAdd= (quantity) => {
        SetQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    console.log("quantityAdded:", quantityAdded);
    return (
        <article>
            <div className="CardDivDetail">
            <article className='CardDetail'>
            <picture>
                <img src={img} alt={name} className="CardImgDetail"/>
            </picture>
            <header className="CardHeaderDetail">
                <h2 className="CardHeaderItemDetail">
                    {name}
                </h2>
            </header>
            <section>
                <p className="CardInfoDetail">
                    {description}
                </p>
                <p className="CardInfoDetail">
                    Precio: ${price}
                </p>
                <p className="CardInfoDetail">
                    Available Stock: {stock}
                </p>
            </section>
            <footer className="CardFooterDetail">
                {
                 <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                }
            </footer>
        </article>
        </div>
        </article>
    )
}

export default ItemDetail