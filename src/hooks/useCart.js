import { useContext } from 'react'
import { CartContext } from '../context/Cart'

const useCart = () => {
    
    // const { cart, setCart, addToCart, clearCart } = useContext(CartContext)
    const context = useContext(CartContext)

    if(context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }

  return context
}

export default useCart