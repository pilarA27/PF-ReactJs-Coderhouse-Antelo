import './Cart.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
    console.log('totalQuantity:', totalQuantity);
    console.log(total)

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
                    {cart.map(p => <CartItem key={p.id} {...p} />)}
                    <h3>Total: ${total}</h3>
                    <button onClick={() => clearCart()} className='Button'>Clear Cart</button>
                    <Link to='/checkout' className='Option'>checkout</Link>
                </div>
            )}
        </div>
    )
}

export default Cart
