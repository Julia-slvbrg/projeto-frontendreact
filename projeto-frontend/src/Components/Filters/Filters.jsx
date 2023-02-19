import { FilterContainer, FilterTitle, FormContainer, StyledLabel, Input } from "./FiltersStyle"

export const Filters = () =>{
    return(
        <FilterContainer>
            <FilterTitle>Filtros</FilterTitle>
            <FormContainer>
                <StyledLabel className="min-price-class" htmlFor="min-price">
                    Valor mínimo:
                    <Input id="min-price"/>
                </StyledLabel>
                <StyledLabel className="max-price-class" htmlFor="max-price">
                    Valor máximo:
                    <Input id="max-price"/>
                </StyledLabel>
                <StyledLabel htmlFor="name-search" className="name-search-class">
                    Buscar por nome:
                    <Input id="name-search"/>
                </StyledLabel>

            </FormContainer>
        </FilterContainer>
        
    )
}

export default Filters