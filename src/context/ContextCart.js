import { useContext, createContext, useReducer} from "react";
import { cartReducer } from "../reducer/cart-reducer";

const CartContext = createContext(null);

const CartContextProvider = ({children}) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartProducts: [],
  })
 return(
   <CartContext.Provider value={{ cartState, cartDispatch }}>
     {children} 
   </CartContext.Provider>
 )
}

const useCartContext = () => useContext(CartContext)

export { useCartContext, CartContextProvider }
