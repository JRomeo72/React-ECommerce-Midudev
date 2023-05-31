import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { FiltersContext } from './context/Filters.jsx'
import { FiltersProvider } from './context/Filters'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <FiltersContext.Provider value={ { category: 'laptops', minPrice: 0 } }>
//       <App />
//     </FiltersContext.Provider>
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FiltersProvider>
			<App />
		</FiltersProvider>
	</React.StrictMode>,
)