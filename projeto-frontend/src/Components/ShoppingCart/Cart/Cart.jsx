import { CartContainer, CartTitle, CartList, Product, RemoveButton } from './CartStyle'


export const Cart = (props) =>{

  const { cart, removeOneFromCart, amount, getTotalAmount } = props
  

/*  const renderAmount = () =>{
    if(cart.length > 0){
      //getTotalAmount()
      console.log(amount)
      return(
        <CartTitle>Total: R$ {amount}</CartTitle>
      )
    }

  }  */
//renderAmount()


    return(
      <CartContainer>
      <CartTitle>Carrinho</CartTitle>
           
      {cart.map((productInCart, index)=>{
        return(
          <CartList key={index}>
          <Product>{productInCart.quantity} x {productInCart.name}</Product>
          <Product></Product>
          <RemoveButton onClick={()=> removeOneFromCart(productInCart.id)}>Remover</RemoveButton>
          </CartList>
        );
      })}

      <CartTitle>Total: R$ {}</CartTitle>

                {/* <Product>1 x </Product>
                <Product>Produto</Product> 
                <RemoveButton onClick={()=> removeOneFromCart()}>Remover</RemoveButton> */}
            
            

            
        </CartContainer>
        
    )
}

export default Cart


/*   
  Essa é uma outra forma de fazer o hover do botão      
    function MouseOver(event) {
        event.target.style.background = 'red';
      }
      function MouseOut(event){
        event.target.style.background="";
    } 
    
    
    return(
        <div className="App">
          <button onMouseOver={MouseOver} onMouseOut={MouseOut}>Hover over me!</button>
        </div>
    )
    */