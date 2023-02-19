import React from "react"
//import styled from "styled-components"
import { GlobalStyled } from "./GlobalStyled"
import { AppContainer, AsideFilter, MainHome, AsideCart } from "./AppStyle"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"


function App() {
 

  

  return (
    <AppContainer>
      <GlobalStyled/>
      <AsideFilter>
        <Filters/>
      </AsideFilter>
      <MainHome>
        <Home/>
      </MainHome>
      <AsideCart>
        <Cart/>
      </AsideCart>
      
      
    </AppContainer>
  )
}

export default App


/* 


      <aside className="filter">
        <Filters/>
      </aside>
      <main>
        <Home/>
      </main>
      <aside className="cart">
        <Cart/>
      </aside>
      </body>



*/



/* 
 <AsideFilter className="filter">
        <Filters/>
      </AsideFilter>
      <MainHome>
        <Home/>
      </MainHome>
      <AsideCart className="cart">
        <Cart/>
      </AsideCart>
      



*/