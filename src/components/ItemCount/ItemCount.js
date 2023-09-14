import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=> {
    const[quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }
    
    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity -1)
        }
    }

    return(
        <div className='Counter'>
            <div className='Controls'>
                <button className='CounterButton' onClick={decrement}>-</button>
                <h4 className='CounterNum'>{quantity}</h4>
                <button className='CounterButton' onClick={increment}>+</button>
            </div>
            <div>
                <button className='CartButton' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ItemCount
