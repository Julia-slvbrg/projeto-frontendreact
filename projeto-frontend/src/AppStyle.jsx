import styled from "styled-components";

export const AppContainer = styled.div`
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    //background-color: rgba(33, 37, 4, 0.469);
    grid-gap: 2em;
`
export const AsideFilter = styled.aside`
    grid-column: 1/2;
    //background-color: bisque;
`
export const MainHome = styled.main`
    grid-column: 2/5;
    //background-color: aqua;
`
export const AsideCart = styled.aside`
    grid-column: 5/6; 
    //background-color: lightblue;
` 