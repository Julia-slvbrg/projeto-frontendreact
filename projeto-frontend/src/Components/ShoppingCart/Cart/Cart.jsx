import { CartContainer, CartTitle, CartList, Product, RemoveButton, Amount } from './CartStyle'


export const Cart = (props) =>{

  const { cart, removeOneFromCart, amount } = props;

  const amountRender = amount.toFixed(2).toString().replace('.', ',');
  

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

      <Amount>Total: R${amountRender}</Amount>          
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