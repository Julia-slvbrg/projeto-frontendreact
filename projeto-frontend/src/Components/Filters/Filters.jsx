import { FilterContainer, FilterTitle, FormContainer, StyledLabel, Input } from "./FiltersStyle"

export const Filters = ({ filterData }) =>{

    const { minFilter, onChangeMinFilter, maxFilter, onChangeMaxFilter, searchFilter, onChangeSearchFilter } = filterData


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
                        onChange={onChangeMinFilter}

                    />
                </StyledLabel>
                <StyledLabel className="max-price-class" htmlFor="max-price">
                    Valor máximo:
                    <Input 
                        id="max-price" 
                        value={maxFilter} 
                        onChange={onChangeMaxFilter}
                    />
                </StyledLabel>
                <StyledLabel htmlFor="name-search" className="name-search-class">
                    Buscar por nome:
                    <Input 
                        id="name-search" 
                        value={searchFilter} 
                        onChange={onChangeSearchFilter}
                    />
                </StyledLabel>

            </FormContainer>
        </FilterContainer>
        
    )
}

export default Filters



/* 
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
                    value={props.minFilter} 
                    onChange={props.onChangeMinFilter}
                />
            </StyledLabel>
            <StyledLabel className="max-price-class" htmlFor="max-price">
                Valor máximo:
                <Input 
                    id="max-price" 
                   value={props.maxFilter} 
                    onChange={props.onChangeMaxFilter}
                   
            </StyledLabel>
            <StyledLabel htmlFor="name-search" className="name-search-class">
                Buscar por nome:
                <Input 
                    id="name-search" 
                    value={props.searchFilter} 
                    onChange={props.onChangeSearchFilter} 
                />
            </StyledLabel>

        </FormContainer>
    </FilterContainer>
    
) */