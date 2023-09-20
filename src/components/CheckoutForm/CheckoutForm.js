import { useState } from "react";
import '../Checkout/Checkout.css'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return(
        <div className="FormContainer">
            <form onSubmit={handleConfirm} className="Form">
                <label className="FormLabel">
                    <p className="FormText">Name</p>
                    <input
                    className="FormInput"
                    type="text"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    />
                </label>
                <label className="FormLabel">
                    <p className="FormText">Phone Number</p>
                    <input
                    className="FormInput"
                    type="number"
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <label className="FormLabel">
                    <p className="FormText">Email</p>
                    <input
                    className="FormInput"
                    type="email"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div className="FormLabel">
                    <button type="submit" className="FormButton">Create Order</button>
                </div>

            </form>

        </div>
    )
}

export default CheckoutForm