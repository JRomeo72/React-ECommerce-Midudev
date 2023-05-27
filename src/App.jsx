import { useState } from 'react'
import Products from './components/Products'
import Header from './components/Header'
import { products as initialProducts } from './mocks/products.json'
// import Filters from './components/Filters'

function App() {

	const [ products, setProducts ] = useState(initialProducts)
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

	const filteredProducts = filterProducts(products)

	return (
		<>
			{/* <Header>
				<Filters setFilters={setFilters} />
			</Header> */}
			<Header setFilters={ setFilters } />
			<Products products={filteredProducts} />
		</>
	)
}

export default App