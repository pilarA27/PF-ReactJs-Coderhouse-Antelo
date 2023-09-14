import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[product, setproduct] = useState(null)

    const{itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setproduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer