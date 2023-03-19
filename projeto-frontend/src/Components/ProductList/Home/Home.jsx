import { HomeContainer, HeaderHome, ProductQnt, StyledLabel, MainHome } from "./HomeStyle"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"


export const Home = ( props ) => {

    const { addToCart, productListFiltered, getCurrencyBr } = props;
    const [ordination, setOrdination] = useState("increasing");

    const handleOrdination = (e) => {
        setOrdination(e.target.value);
    };
    

    return(
        <HomeContainer>
            <HeaderHome>
                <ProductQnt>Quantidade de produtos: {productListFiltered.length}</ProductQnt>
                <StyledLabel>
                    Ordenação:
                    <select value={ordination} onChange={handleOrdination} >
                        <option value="increasing">Crescente</option>
                        <option value="decreasing">Decrescente</option>
                    </select>
                </StyledLabel>
            </HeaderHome>   

            <MainHome>
                {productListFiltered.sort((a, b)=>{
                    if(ordination === 'increasing'){
                        return a.value - b.value
                    };
                    if(ordination === 'decreasing'){
                        return b.value - a.value
                    };
                }).map((productItem, index) => {
                    return(
                        <ProductCard 
                            key={index} 
                            productItem={productItem} 
                            addToCart={addToCart}
                            getCurrencyBr={getCurrencyBr}
                        />
                    );
                })}
            </MainHome>
        </HomeContainer>
    )
}

export default Home


