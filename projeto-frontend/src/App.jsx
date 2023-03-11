import React, { useState } from "react"
//import styled from "styled-components"
import { GlobalStyled } from "./GlobalStyled"
import { AppContainer, AsideFilter, MainHome, AsideCart } from "./AppStyle"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import { PorductInfo } from "./Components/ProductList/ProductCard/ProductCardStyle"


function App() {
 
  //FILTER
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const handleMinFilter = (e) => {
    if(!isNaN(e.target.value)){
      setMinFilter(e.target.value)
    }
  };
  //console.log(minFilter);

  const handleMaxFilter = (e) => {
    if(!isNaN(e.target.value)){
      setMaxFilter(e.target.value)
    }
  };
  //console.log(maxFilter);

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value)    
  };
  //console.log(searchFilter);

  

  //HOME
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrDrTWcipYhJlXWo77J22BD62AkU0N6WdBQ&usqp=CAU"
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

  const getProductDataId = (id) => {
    let productData = productList.find(product => product.id === id);

    if(productData == undefined){
      console.log("Produto com o id " +id+ " não encontrado")
      return undefined
    };

    //console.log(productData)
    return productData
  };

  
  //CARRINHO
  const [cart, setCart] = useState([]); //carrinho de produtos
  const [amount, setAmount] = useState(0); //aqui é o valor total da compra

  console.log(typeof amount)


  const checkProductsInCart = (id) => {
    const productInCart = cart.find(product => { //aqui foi usado o find para que o retorno seja um objeto, não um array. O find retorna a primeira coisa que dá um match com a condição, o filter retorna a coisa que deu match dentro de um array
      
      if(product.id === id){
        return product
      }else{
        return undefined
      };
    });
  return productInCart
  };

  const addToCart = (idProduct) => {
    const isInCart = checkProductsInCart(idProduct);

    if(!isInCart){ //se o produto NÃO estiver no carrinho
      const productData = getProductDataId(idProduct);
      setCart([
        ...cart,
        {
          id: productData.id,
          name: productData.name,
          value: productData.value,
          quantity: 1
        }
      ]);
    }else{ // se o produto JÁ estiver no carrinho
      setCart(
        cart.map(productInCart =>
          productInCart.id === idProduct?
          {...productInCart, quantity: productInCart.quantity + 1} 
          : productInCart  
        )
      );
    }
  };
  console.log(cart);
  console.log(typeof cart[0].value)


  const removeOneFromCart = (idProduct) => {
    const productInCart = checkProductsInCart(idProduct);

    if(productInCart.quantity == 1){
      deleteFromCart(idProduct);
    }else{
      setCart(
        cart.map(
          product=> 
          product.id === idProduct?
          {...product, quantity: product.quantity - 1}
          : product
      ));
    }
  }

  const deleteFromCart = (idProduct) => {
    setCart(
      cart.filter(product => {
        return product.id != idProduct;
      })
    )
  }

  const getTotalAmount = () => {
    //const productData = getProductDataId(idProduct);
    
    setAmount(
      cart.value
    )
    
    
  }



  return (
    <AppContainer >
      <GlobalStyled/>
      <AsideFilter>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          handleMinFilter={handleMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          handleMaxFilter={handleMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          handleSearchFilter={handleSearchFilter} 
        />
      </AsideFilter>
      <MainHome>
        <Home
          productList={productList}  
          cart={cart}
          addToCart={addToCart} 
          amount={amount}
        />
      </MainHome>
      <AsideCart>
        <Cart
          cart={cart}
          removeOneFromCart={removeOneFromCart}   
          amount={amount} 
          getTotalAmount={getTotalAmount}
        />
      </AsideCart>
      
      
    </AppContainer>
  )
}

export default App



