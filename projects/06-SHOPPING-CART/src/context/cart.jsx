import { createContext } from "react";
import { useCartReducer } from "../hooks/useCatReducer";

// 1. crear contexto
export const CartContext = createContext();

// 2. crear provider
export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}