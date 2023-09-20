import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  calculateTotal: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      const initialTotalQuantity = JSON.parse(storedCart).reduce(
        (accumulator, currentItem) => accumulator + currentItem.quantity,
        0
      );
      setTotalQuantity(initialTotalQuantity);
    }
  }, []);

  const addItem = (item, quantity) => {
    const newItem = { ...item, quantity };
    
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, newItem]);
    } else {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity
          };
        }
        return cartItem;
      });
      setCart(updatedCart);
    }
  
    setTotalQuantity((prev) => prev + quantity);
    localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
  };

  const calculateTotal = () => {
    const newTotal = cart.reduce((accumulator, currentItem) => {
      if (currentItem && currentItem.price) {
        return accumulator + currentItem.price * currentItem.quantity;
      } else {
        return accumulator;
      }
    }, 0);
    return newTotal;
  };

  const removeItem = (itemId) => {
    const itemToRemove = cart.find((item) => item && item.id === itemId);
    
    if (itemToRemove) {
      const updatedCart = cart.filter((item) => item && item.id !== itemId);
      setCart(updatedCart);
      setTotalQuantity((prev) => prev - itemToRemove.quantity);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      console.error("The product is not in the cart");
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
    localStorage.removeItem("cart");
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item && item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        calculateTotal,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

