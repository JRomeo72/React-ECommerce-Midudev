import { useContext } from 'react'
import { FiltersContext } from '../context/Filters'

const useFilters = () => {

	// const [ filters, setFilters ] = useState( { category: 'all', minPrice: 0 })
	const [ filters, setFilters ] = useContext(FiltersContext)

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

	return { filters, setFilters, filterProducts }
	// return [ filterProducts, setFilters ]

}

export default useFilters