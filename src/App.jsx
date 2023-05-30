import { useState } from 'react'
import Products from './components/Products'
import Header from './components/Header'
import { products as initialProducts } from './mocks/products.json'
import Footer from './components/Footer'

function useFilters () {

	const [ filters, setFilters ] = useState( { category: 'all', minPrice: 0 })

	const filterProducts = (products) => {
		return products.filter(product => {
			return (
				product.price >= filters.minPrice && 
				(
					filters.category === 'all' ||
					product.category === filters.category
				)
			)
		})
	}

	// return { filterProducts, setFilters }
	return [ filterProducts, setFilters ]

}


function App() {

	const [ products ] = useState(initialProducts)
	const [ filterProducts, setFilters ] = useFilters()
	const filteredProducts = filterProducts(products)

	return (
		<>
			<Header setFilters={ setFilters } />
			<Products products={filteredProducts} />
			<Footer />
		</>
	)
}

export default App