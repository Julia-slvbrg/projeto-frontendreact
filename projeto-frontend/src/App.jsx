import React from "react"
//import styled from "styled-components"
import { GlobalStyled } from "./GlobalStyled"
import { AppContainer, AsideFilter, MainHome, AsideCart } from "./AppStyle"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"


function App() {
 

  const productList = [
    {
        id: 1,
        name: "Toalha",
        value: 36.0,
        imageUrl: "https://images.unsplash.com/photo-1639298107851-058984903954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80"
    },
    {
        id: 2,
        name: "Kit cerveja e amendoins",
        value: 25.0,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEi8lcXa7Pzm5ByaYLoMRnWGshqKJ_WH5UQ&usqp=CAU"
    },
    {
        id: 3,
        name: "O Guia do Mochileiro das Galáxias",
        value: 250.0,
        imageUrl: "https://i.ebayimg.com/images/g/cv8AAOSwuCVgzCKQ/s-l1600.jpg"
    },
    {
        id: 4,
        name: "Peixe Babel",
        value: 650.0,
        imageUrl: "https://cdn.shopify.com/s/files/1/0119/0671/1652/products/IMG_8152_1400x.JPG?v=1546712552"
    },
    {
        id: 5,
        name: "Dedão eletrônico",
        value: 420.0,
        imageUrl: "https://geekyrings.com/wp-content/uploads/2020/09/hitchhiker-s-guide-to-the-gallaxy-ring-4.jpg"
    }
  ];

  return (
    <AppContainer >
      <GlobalStyled/>
      <AsideFilter>
        <Filters/>
      </AsideFilter>
      <MainHome>
        <Home
          product={productList}          
        />
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