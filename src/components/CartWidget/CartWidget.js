import shoppingBag from './assets/shoppingBag.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return(
        <div>
            <Link to='/Cart'>
                <div>
                    <img src={shoppingBag} alt='cart-widget'/>
                    {totalQuantity}
                </div>
            </Link>
        </div>
    )
}

export default CartWidget