import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CardItem from "./CartItem/CartItem";
import '../Cart/Cart.css'
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
          <div className="CartInfo">
            {cart.map((p) => (
              p ? <CardItem key={p.id} {...p} /> : null
            ))}
          </div>
          <h3 className="CartTotal">Total: ${calculateTotal()}</h3>
          <div className="CartOptions">
          <button onClick={clearCart} className="CartButton">
            Clear Cart
          </button>
          <Link to="/Checkout" className="CartButton">
            Checkout
          </Link>
        </div>
          </div>
      )}
    </div>
  )
}

export default Cart
