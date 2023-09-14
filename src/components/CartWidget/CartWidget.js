import shoppingBag from './assets/shoppingBag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return(
        <Link to='/Cart'>
            <img src={shoppingBag} alt='cart-widget'/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget