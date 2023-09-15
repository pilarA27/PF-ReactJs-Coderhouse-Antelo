import React, {useContext} from "react"; 
import { CartContext} from "../../../context/CartContext"; 
  
 const CardItem = (p) => { 
     const {removeItem} = useContext (CartContext) 
  
     const handleRemove = () => { 
         removeItem(p.id) 
     } 
 return( 
     <div className="CartItem"> 
         <div className="CartItemInfo"> 
             <div className="CartItemDetails"> 
                 <h2>{p.name}</h2> 
                 <p>Quantity: {p.quantity}</p> 
                 <p>Price: {p.price}</p>
                 <p>Subtotal: {p.price*p.quantity}</p> 
                 <button onClick={handleRemove}>Remove Item</button>
             </div> 
         </div> 
     </div> 
 ) 
 } 
 export default CardItem