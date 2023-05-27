import { AddToCartIcon } from "./Icons"
import '../assets/css/products.css'

const Products = ( { products } ) => {
  return (
    <div className="products">
        <ul>
            {
                products.slice(0, 10).map(product => (

                <li key={ product.id }>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <div>
                        <strong>{ product.title }</strong> - ${ product.price }
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>

                ))
            }
        </ul>
    </div>
  )
}

export default Products