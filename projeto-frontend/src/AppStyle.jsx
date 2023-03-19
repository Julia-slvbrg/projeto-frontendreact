import styled from "styled-components";


export const AppContainer = styled.div`
    max-height: 195vh;
    min-height: auto;
`

export const StoreContainer = styled.div`
    padding-bottom: 1em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: #242424;
    border-top: 1px solid #242424;
`
export const AsideFilter = styled.aside`
  grid-column: 1/2;
`
export const MainHome = styled.main`
    grid-column: 2/5;
`
export const AsideCart = styled.aside`
   grid-column: 5/6; 
` 