import { createContext } from "react";

export const FiltersContext = createContext()
// eslint-disable-next-line react/prop-types
export const FiltersProvider = ( { children } ) => {
    return (
        <FiltersContext.Provider value={ { category: 'all', minPrice: 0 } }>
            { children }
        </FiltersContext.Provider>
    )
}