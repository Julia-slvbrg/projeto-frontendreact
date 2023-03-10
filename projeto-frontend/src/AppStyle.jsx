import styled from "styled-components";


export const AppContainer = styled.div`
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    grid-gap: .5em;
    background-image:url('https://images.unsplash.com/photo-1570284613060-766c33850e00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-repeat: repeat;
    background-size: 100%;


    
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