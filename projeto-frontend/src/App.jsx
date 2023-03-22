import React, { useEffect, useState } from "react"
import { GlobalStyled } from "./GlobalStyled"
import { AppContainer, StoreContainer, AsideFilter, MainHome, AsideCart } from "./AppStyle"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Header from "./Components/Header/Header"


function App() {
 
  //States
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState([]); //carrinho de produtos
  const [amount, setAmount] = useState(0); //aqui é o valor total da compra

  //FILTER
  const handleMinFilter = (e) => {
    if(!isNaN(e.target.value)){
      if(e.target.value<0){
        return
      };
      setMinFilter(e.target.value);
    }
  };

  const handleMaxFilter = (e) => {
    if(!isNaN(e.target.value)){
      if(e.target.value<0){
        return
      };
      setMaxFilter(e.target.value);
    }
  };

  const handleSearchFilter = (e) => {
    setSearchFilter(e.target.value)    
  };

  
  //HOME
  const productList = [
    {
        id: 1,
        name: "Toalha",
        value: 36.0,
        imageUrl: "https://images.unsplash.com/photo-1639298107851-058984903954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=660&q=80",
        description: 'O item que não pode faltar em nenhuma viagem espacial!!',
        descriptionStatus: false
    },
    {
        id: 2,
        name: "Kit cerveja e amendoins",
        value: 25.0,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrDrTWcipYhJlXWo77J22BD62AkU0N6WdBQ&usqp=CAU",
        description: 'Jet lag depois de uma viagem? Não com um pouco de cerveja e amendoins.',
        descriptionStatus: false
    },
    {
        id: 3,
        name: "O Guia do Mochileiro das Galáxias",
        value: 254.47,
        imageUrl: "https://i.ebayimg.com/images/g/cv8AAOSwuCVgzCKQ/s-l1600.jpg",
        description: 'NÃO ENTRE EM PÂNICO!! O Guia tem todas as informações que você pode precisar ao viajar pelas galáxias.',
        descriptionStatus: false
    },
    {
        id: 4,
        name: "Peixe Babel",
        value: 651.99,
        imageUrl: "https://cdn.shopify.com/s/files/1/0119/0671/1652/products/IMG_8152_1400x.JPG?v=1546712552",
        description: 'Tradutor simultâneo de qualquer idioma em qualquer parte do universo.',
        descriptionStatus: false
    },
    {
        id: 5,
        name: "Dedão eletrônico",
        value: 420.0,
        imageUrl: "https://geekyrings.com/wp-content/uploads/2020/09/hitchhiker-s-guide-to-the-gallaxy-ring-4.jpg",
        description: 'O item que você precisa para pedir uma carona, especialmente se o seu planeta estiver prestes a acabar.',
        descriptionStatus: false
    },
    {
        id: 6,
        name: "Nave Coração de Ouro",
        value: 6180000000.0,
        imageUrl: "http://www.oarquivo.com.br/images/stories/geral3/nave5a.png",
        description: 'A última tecnologia em se tratando de viagens espaciais, ela pode até se tornar um ser senciente.',
        descriptionStatus: false
    },
    {
        id: 7,
        name: "Android Paranoide Marvin",
        value: 21479.0,
        imageUrl: "https://www.obrigadopelospeixes.com/wp-content/uploads/2013/01/600full-the-hitchhikers-guide-to-the-galaxy-poster.jpg",
        description: 'Ele vai ajudar você a manter a sua sanidade com muito sarcasmo e pessimismo.',
        descriptionStatus: false
    },
    {
        id: 8,
        name: "O Drive de Improbabilidade",
        value: 43697100.0,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnQ1wAWIx8QUB-PQ9dImeVFOti0T-3DGP4wBxNMi-_7GiuURD9T2h_34DAAlvJZe2vgE&usqp=CAU",
        description: 'O que você precisa para fazer o improvável acontecer.',
        descriptionStatus: false
    }
  ];

  const productListFiltered = productList.filter((product)=>{
    if(!maxFilter){
      return product.value >= minFilter;
    }else{
      return (product.value >= minFilter && product.value <= maxFilter);
    };
  }).filter((product)=>{
    return product.name.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
  });

  const getProductDataId = (id) => {
    let productData = productList.find(product => product.id === id);

    if(productData == undefined)  return undefined;
    return productData
  };

  
  //CARRINHO

  const checkProductsInCart = (id) => {
    const productInCart = cart.find(product => { //aqui foi usado o find para que o retorno seja um objeto, não um array. O find retorna a primeira coisa que dá um match com a condição, o filter retorna um array com a coisa que deu match dentro 
      
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
      getTotalAmountAdding(idProduct);
    }else{ // se o produto JÁ estiver no carrinho
      setCart(
        cart.map(productInCart =>
          productInCart.id === idProduct?
          {...productInCart, quantity: productInCart.quantity + 1} 
          : productInCart  
        )
      );
      getTotalAmountAdding(idProduct);
    }
  };
 
  const removeOneFromCart = (idProduct) => {
    const productInCart = checkProductsInCart(idProduct);

    if(productInCart.quantity == 1){
      deleteFromCart(idProduct);
      getTotalAmountRemoving(idProduct);
    }else{
      setCart(
        cart.map(
          product=> 
          product.id === idProduct?
          {...product, quantity: product.quantity - 1}
          : product
      ));
      getTotalAmountRemoving(idProduct);
    }
  };

  const deleteFromCart = (idProduct) => {
    setCart(
      cart.filter(product => {
        return product.id != idProduct;
      })
    );
  };

  useEffect(() => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const amountLocalStorage = JSON.parse(localStorage.getItem('amount'));
    if (cartLocalStorage) {
      setCart(cartLocalStorage);
      setAmount(amountLocalStorage);
    };
  }, []);

  useEffect(() => {
    if(cart.length>0){
      const cartToString = JSON.stringify(cart);
      const amountToString = JSON.stringify(amount);
      localStorage.setItem('cart', cartToString);
      localStorage.setItem('amount', amountToString);
    }else{
      localStorage.removeItem('cart');
      localStorage.removeItem('amount');
    }
  }, [cart]);


  const getTotalAmountAdding = (idProduct) => {
    const productData = getProductDataId(idProduct);
    setAmount(amount + productData.value);
  };

  const getTotalAmountRemoving = (idProduct) => {
    const productData = getProductDataId(idProduct);
    setAmount(Math.abs(amount - productData.value));
  };

  const getCurrencyBr = (value) => {
    const currency = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    return currency
  }

  return (
    <AppContainer>  
      <GlobalStyled/>  
      <Header/>
      <StoreContainer>
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
          cart={cart}
          addToCart={addToCart} 
          amount={amount}
          productListFiltered={productListFiltered}
          getCurrencyBr={getCurrencyBr}
        />
      </MainHome>
      <AsideCart>
        <Cart
          cart={cart}
          removeOneFromCart={removeOneFromCart}   
          amount={amount} 
          getCurrencyBr={getCurrencyBr}
        />
      </AsideCart>
    </StoreContainer>
    </AppContainer>
  )
}

export default App



