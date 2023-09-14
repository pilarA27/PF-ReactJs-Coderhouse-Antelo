import React, {useContext} from "react"; 
import { CartContext} from "../../../context/CartContext"; 
  
 const CardItem = (p) => { 
     const {removeFromCart} = useContext (CartContext) 
  
     const handleRemove = () => { 
         removeFromCart(p.id) 
     } 
 return( 
     <div className="CarItem"> 
         <div className="CartItemInfo"> 
             <img src={p.img} alt={p.name} className="CartItemImg" /> 
             <div className="CartItemDetails"> 
                 <h2>{p.name}</h2> 
                 <p>Quantity: {p.quantity}</p> 
                 <p>Price: {p.price}</p> 
             </div> 
         </div> 
     </div> 
 ) 
 } 
 export default CardItem