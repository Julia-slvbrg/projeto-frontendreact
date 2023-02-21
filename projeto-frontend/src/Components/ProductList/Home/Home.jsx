import { HomeContainer, HeaderHome, ProductQnt, StyledLabel, MainHome } from "./HomeStyle"
import ProductCard from "../ProductCard/ProductCard"


export const Home = ( props ) =>{

    

   //console.log(props.product[4])
    return(

        <HomeContainer>
            <HeaderHome>
                <ProductQnt>Quantidade de produtos: 5</ProductQnt> {/* essa quantidade é o tanto de produtos que está aparecendo no tela depois de aplicar os filtros*/}
                <StyledLabel>
                    Ordenação:
                    <select>
                        <option value="increasing">Crescente</option>
                        <option value="decreasing">Decrescente</option>
                    </select>
                </StyledLabel>
            </HeaderHome>

            <MainHome>
                <ProductCard product={props.product[0]} /> 
                <ProductCard product={props.product[1]}/>
                <ProductCard product={props.product[2]}/>
                <ProductCard product={props.product[3]}/>
                <ProductCard product={props.product[4]}/>
            </MainHome>
             
        </HomeContainer>
       
    )
}

export default Home