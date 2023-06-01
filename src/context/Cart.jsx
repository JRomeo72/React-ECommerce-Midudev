import { createContext, useState } from "react"


export const CartContext = createContext

// eslint-disable-next-line react/prop-types
export const CartProvider = ( { children } ) => {

    const [ cart, setCart ] = useState([])

    const addToCart = product => {}
    const clearCart = () => { setCart([]) }

    return (
        <CartContext.Provider value={
            { cart, setCart, addToCart, clearCart }
        }>
            { children }
        </CartContext.Provider>
    )
}

