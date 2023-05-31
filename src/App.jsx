import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import useFilters from './hooks/useFilters'
import Header from './components/Header'
import Products from './components/Products'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {

	const [ products ] = useState(initialProducts)
	const { filterProducts } = useFilters()
	const filteredProducts = filterProducts(products)

	return (
		<>
			<Header />
			<Products products={filteredProducts} />
			<Cart />
			<Footer />
		</>
	)
}

export default App