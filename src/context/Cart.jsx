import { createContext, useReducer, useState } from "react"


export const CartContext = createContext()

// > Usando Reducer
const initialState = []
const reducer = ( state, action ) => {

    const { type: actionType, action: actionPayload } = action
    
    switch (actionType) {

        case 'ADD_TO_CART':
            {
                const { id } = actionPayload
                // Check if the product is already in the cart 
                const productInCartIndex = state.findIndex(item => item.id === id)
    
                // Si el producto ya esta en el carrito 
                if(productInCartIndex >= 0) {
                    const newCart = structuredClone(state)
                    newCart[productInCartIndex].quantity += 1
                    return newCart
                }
    
                // Si el producto no esta en el carrito 
                return [
                    ...state,
                    { ...actionPayload, quantity: 1 }
                ]
            }

        case 'REMOVE_FROM_CART':
            {
                const { id } = actionPayload
                return state.filter(item => item.id !== id)
            }

        case 'CLEAR_CART':
            {
                return initialState
            }
    
        default:
            break;
    }

}

// eslint-disable-next-line react/prop-types
export const CartProvider = ( { children } ) => {

    const [ state, dispatch ] = useReducer(reducer, initialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART'
    })



    // > Sin Reducer 
    /*const [ cart, setCart ] = useState([])

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

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }
    
    const clearCart = () => { setCart([]) } */

    return (
        <CartContext.Provider value={ { cart: state, addToCart, removeFromCart, clearCart } }>
            { children }
        </CartContext.Provider>
    )
}

