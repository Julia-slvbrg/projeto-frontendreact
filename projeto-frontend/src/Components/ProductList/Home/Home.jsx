import { ProductQnt, StyledLabel, HomeContainer } from "./HomeStyle"



export const Home = () =>{
    return(

        <HomeContainer>
         <ProductQnt>Quantidade de produtos:</ProductQnt> {/* essa quantidade é o tanto de produtos que está aparecendo no tela depois de aplicar os filtros*/}
         <StyledLabel>
            Ordenação:
            <select>
                <option value="increasing">Crescente</option>
                <option value="decreasing">Decrescente</option>
            </select>
         </StyledLabel>
        </HomeContainer>
       
    )
}

export default Home