import { FilterContainer, FilterTitle, FormContainer, StyledLabel, Input } from "./FiltersStyle"

export const Filters = ( filterData ) => {

    const { minFilter, handleMinFilter, maxFilter, handleMaxFilter, searchFilter, handleSearchFilter } = filterData;


    return(
        <FilterContainer>
            <FilterTitle>Filtros</FilterTitle>
            <FormContainer>
                <StyledLabel className="min-price-class" htmlFor="min-price">
                    Valor mínimo:
                    <Input 
                        type="number" 
                        min="0" 
                        oninput="validity.valid||(value='')" //tentar com essas três linhas, se não der certo, tentar condicional na função.
                        id="min-price" 
                        value={minFilter} 
                        onChange={handleMinFilter}

                    />
                </StyledLabel>
                <StyledLabel className="max-price-class" htmlFor="max-price">
                    Valor máximo:
                    <Input
                        type="number" 
                        min="0" 
                        oninput="validity.valid||(value='')" 
                        id="max-price" 
                        value={maxFilter} 
                        onChange={handleMaxFilter}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="name-search" className="name-search-class">
                    Buscar por nome:
                    <Input 
                        id="name-search" 
                        value={searchFilter} 
                        onChange={handleSearchFilter}
                    />
                </StyledLabel>

            </FormContainer>
        </FilterContainer>
        
    )
}

export default Filters


