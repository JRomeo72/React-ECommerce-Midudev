import { useId, useState } from 'react'
import '../assets/css/filters.css'
import useFilters from '../hooks/useFilters'

// eslint-disable-next-line react/prop-types
// const Filters = ( { setFilters } ) => {
const Filters = () => {

    // const { setFilters } = useFilters()
    const { filters, setFilters } = useFilters()

    // const [ miPrice, setMiPrice ] = useState(0)
    const priceFilterId = useId()
    const categoryFilterId = useId()    

    const handleChangeMiPrice = (event) => {
        // setMiPrice(event.target.value)

        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <div className='filters'>
            <div>
                <label htmlFor={priceFilterId}>Precio</label>
                <input type="range" id={priceFilterId} min='0' max='1000' onChange={handleChangeMiPrice} value={filters.minPrice} />
                <span>${ filters.minPrice }</span>
            </div>
            <div><label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </div>
    )
}

export default Filters