import { useState } from 'react'
import '../assets/css/filters.css'

const Filters = ( { setFilters } ) => {

    const [ miPrice, setMiPrice ] = useState(0)

    const handleChangeMiPrice = (event) => {
        setMiPrice(event.target.value)

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
                <label htmlFor="price">Precio</label>
                <input type="range" id='price' min='0' max='1000' onChange={handleChangeMiPrice} />
                <span>${ miPrice }</span>
            </div>
            <div><label htmlFor="category">Categoría</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </div>
    )
}

export default Filters