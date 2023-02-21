import styled from "styled-components";

export const ProductCardContainer = styled.div`
    border: 1px solid #FFFFFF;
    width: 21em;
    height: 34em;
    display: flex;
    flex-direction: column;
    background-color: #3498DB ;
`

export const Image = styled.img`
    height: 24em;
    width: 20.8em;
    align-self: center;
`

export const PorductInfo = styled.div`
    margin: .5em 0 0em .5em;
    display: flex;
    flex-direction: column;
    
`

export const ProductName = styled.p`
    color: #FFFFFF;
    font-size: 1.2em;
    font-family: 'PT Sans', sans-serif;
    font-weight: 800;
    //mix-blend-mode: difference;
`

export const ProductPrice = styled.p`
    color: #FFFFFF;
    font-size: 1.0em;
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    margin: .5em 0 1em 0;
`
export const AddButon = styled.button`
    font-size: .85em;
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    margin: .5em 0 1em 0;
    align-self: center;
    width: 14em;
    border-radius: .4em;
    border-color: gray;
    :hover{
        background-color: #80808085;
    }
`