import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CardItem from "./CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, calculateTotal } = useCart();

  return (
    <div>
      {totalQuantity === 0 ? (
        <div>
          <h1>Your cart is empty</h1>
          <Link to="/" className="Option">
            Products
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((p) => (
            <CardItem key={p.id} {...p} />
          ))}
          <h3>Total: ${calculateTotal()}</h3>
          <button onClick={clearCart} className="Button">
            Clear Cart
          </button>
          <Link to="/Checkout" className="Option">
            Checkout
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart
