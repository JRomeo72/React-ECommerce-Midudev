import Filters from "./Filters"

const Header = ( { setFilters } ) => {
  return (
    <header>
        <h1>React Shop 🛒</h1>
        <Filters setFilters={ setFilters } />
    </header>
  )
}


// const Header = ( { children } ) => {
//   return (
//     <header>
//         <h1>React Shop 🛒</h1>
//         { children }
//     </header>
//   )
// }

export default Header