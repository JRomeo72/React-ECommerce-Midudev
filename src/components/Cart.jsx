import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import '../assets/css/cart.css'
import useCart from '../hooks/useCart'

// eslint-disable-next-line react/prop-types
const CartItem = ( { thumbnail, quantity, title, price, addToCart } ) => {

    return (
        <li>
            <img src={thumbnail} alt={title} />

            <div>
                <strong>{title}</strong> - $ ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>

        </li>
    )
}

const Cart = () => {

    const { cart, addToCart, clearCart } = useCart()
    const cartCheckboxId = useId()


    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className='cart'>
                <ul>
                    {
                        cart.map(item => (

                            <CartItem key={item.id} addToCart={() => addToCart(item)} {...item} />
                            
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>

            </aside>
        </>
    )
}

export default Cart