import { HomeContainer, HeaderHome, ProductQnt, StyledLabel, MainHome } from "./HomeStyle"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"


export const Home = ( props ) => {

    const { productList, cart, addToCart, amount } = props;
    
    const [ordination, setOrdination] = useState("");

    const handleOrdination = (e) => {
        //console.log(e.target.value)
        setOrdination(e.target.value);
    };
    
    return(

        <HomeContainer>
            <HeaderHome>
                <ProductQnt>Quantidade de produtos: 5</ProductQnt> {/* essa quantidade é o tanto de produtos que está aparecendo no tela depois de aplicar os filtros*/}
                <StyledLabel>
                    Ordenação:
                    <select value={ordination} /* onChange={(e)=>setOrdination(e.target.value)} */ onChange={handleOrdination} >
                        <option value="increasing">Crescente</option>
                        <option value="decreasing">Decrescente</option>
                    </select>
                </StyledLabel>
            </HeaderHome>

            <MainHome>
                {productList.map((productItem, index) => {
                    return(
                        <ProductCard 
                            key={index} 
                            productItem={productItem} 
                            addToCart={addToCart}
                        
                            />
                    );
                })};
            </MainHome>
        </HomeContainer>
       
    )
}

export default Home


