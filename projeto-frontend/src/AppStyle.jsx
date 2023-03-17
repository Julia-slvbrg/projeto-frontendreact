import styled from "styled-components";


export const AppContiner = styled.div`

`

export const StoreContainer = styled.div`
    padding-bottom: 2em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: #242424;
    min-height: fit-content;
    max-height: auto;
`
export const AsideFilter = styled.aside`
    grid-column: 1/2;
    height: fit-content;
`
export const MainHome = styled.main`
    grid-column: 2/5;
    height: fit-content;
`
export const AsideCart = styled.aside`
    grid-column: 5/6; 
    height: fit-content;
` 