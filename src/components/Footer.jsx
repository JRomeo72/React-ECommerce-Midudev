import '../assets/css/footer.css'
import useCart from '../hooks/useCart'

const Footer = () => {

	const { cart } = useCart()

    return (
		<footer className='footer'>
			<h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
			<h5>Shopping Cart con useContext & useReducer</h5>
			<small>
				{
					JSON.stringify(cart, null, 2)
				}
			</small>
		</footer>
    )
}

export default Footer