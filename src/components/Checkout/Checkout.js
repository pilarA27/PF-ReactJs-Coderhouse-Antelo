import '../Checkout/Checkout.css'
import check from './img/check.png'


const Checkout = () =>{
    return(
        <div className='Checkout'>
            <img src={check} alt='Check Icon' className='CheckImg' />
            <h2 className='CheckText'>Your order was successful and is ready for pickup.</h2>
            <p className='CheckLittleText'>Thanks for trusting us!!</p>
        </div>
    )
}

export default Checkout
