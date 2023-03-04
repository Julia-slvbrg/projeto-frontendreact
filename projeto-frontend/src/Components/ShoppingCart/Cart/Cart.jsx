import { CartContainer, CartTitle, CartList, Product, RemoveButton } from './CartStyle'


export const Cart = (props) =>{

  console.log(props)

    return(
        <CartContainer>
            <CartTitle>Carrinho</CartTitle>
            <CartList>
                <Product>1 x </Product>
                <Product>Produto</Product> 
                <RemoveButton>Remover</RemoveButton>
            </CartList>
            

            
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