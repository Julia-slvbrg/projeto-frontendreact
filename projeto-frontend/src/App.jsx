import React from "react"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"

function App() {
 
  return (
    <div className="App">
      <h1>Loja de itens para viagens espaciais</h1>
      <p>em breve....</p>
      <Filters/>
      <Home/>
      <Cart/>
    </div>
  )
}

export default App
