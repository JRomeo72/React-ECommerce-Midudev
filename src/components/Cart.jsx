import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'
import '../assets/css/cart.css'
import useCart from '../hooks/useCart'

const Cart = () => {

    const { cart, clearCart } = useCart()
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

                            <li key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />

                                <div>
                                    <strong>{item.title}</strong> - $ ${item.price}
                                </div>

                                <footer>
                                    <small>
                                        Qty: {item.quantity}
                                    </small>
                                    <button>+</button>
                                </footer>

                            </li>
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