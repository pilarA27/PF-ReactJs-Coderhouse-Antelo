import '../Checkout/Checkout.css'
import check from './img/check.png'
import '../CheckoutForm/CheckoutForm'
import { useContext, useState } from 'react'
import { Timestamp, addDoc, collection, writeBatch, getDocs, query, where, documentId} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase-config'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import '../Cart/Cart'


const Checkout = () =>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in', ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb= dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.prodQuantity
                
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else{
                console.error('There is products out of stock')
            }
        } catch (error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    if(loading){
        return <h1>Processing your order...</h1>
    }

    if(orderId) {
        return(
            <div className='Checkout'>
                <img src={check} alt='Check Icon' className='CheckImg' />
                <h1>Order ID: {orderId}</h1>
                <h2 className='CheckText'>Your order was successful and is ready for pickup.</h2>
                <p className='CheckLittleText'>Thanks for trusting us!!</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout
