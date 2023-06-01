import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import '../assets/css/products.css'
import useCart from "../hooks/useCart"

const Products = ( { products } ) => {

    const { cart, addToCart, removeFromCart } = useCart()

    const checkInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="products">
            <ul>
                {
                    products.slice(0, 10).map(product => {

                        const isInCart = checkInCart(product)
                        console.log(isInCart)

                        return (

                            <li key={ product.id }>
                                <img src={ product.thumbnail } alt={ product.title } />
                                <div>
                                    <strong>{ product.title }</strong> - ${ product.price }
                                </div>
                                <div>
                                    {
                                        !isInCart ?
                                            <button onClick={() => addToCart(product)}>
                                                <AddToCartIcon />
                                            </button>
                                            : 
                                                <div className="add-remove">
                                                    <button onClick={() => addToCart(product)}>
                                                        <AddToCartIcon />
                                                    </button>
                                                    <button className="remove-from-cart" onClick={() => removeFromCart(product)}>
                                                        <RemoveFromCartIcon />
                                                    </button>

                                                </div>
                                            


                                    }
                                </div>
                            </li>

                            )
                        }
                    )
                }
            </ul>
        </main>
    )
}

export default Products