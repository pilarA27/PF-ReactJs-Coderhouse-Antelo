import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase-config'

const ItemDetailContainer = () => {
    const[product, setproduct] = useState(null)
    const[loading, setLoading] = useState(true)

    const{itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setproduct(productAdapted)
            })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer