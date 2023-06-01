import { createContext, useState } from "react"


export const CartContext = createContext

// eslint-disable-next-line react/prop-types
export const CartProvider = ( { children } ) => {

    const [ cart, setCart ] = useState([])

    const addToCart = product => {

        // Check if the product is already in the cart 
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        // Si el producto ya esta en el carrito 
        if(productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        // Si el producto no esta en el carrito 
        setCart(prevState => ([
            ...prevState,
            { ...product, quantity: 1 }
        ]))

    }
    const clearCart = () => { setCart([]) }

    return (
        <CartContext.Provider value={
            { cart, setCart, addToCart, clearCart }
        }>
            { children }
        </CartContext.Provider>
    )
}

