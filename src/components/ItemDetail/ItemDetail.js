import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './ItemDetail.css'

const ItemDetail = ({ id, name, url, category, description, price, stock }) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, cantidad);
  };

  return (
    <div className="CardDivDetail">
        <article className="CardDetail">
            <picture className="flex justify-center">
                <img src={url} className="CardImgDetail" alt={name} />
            </picture>
            <header className="CardHeaderDetail">
                <h3 className="CardHeaderItemDetail">
                    {name}
                </h3>
            </header>
            <section>
                <p className="CardInfoDetail">{description}</p>
                <p className="CardInfoDetail">Price: ${price}</p>
            </section>
            <footer className="CardFooterDetail">
                {<ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />}
            </footer>
        </article>
      </div>
  );
};

export default ItemDetail;