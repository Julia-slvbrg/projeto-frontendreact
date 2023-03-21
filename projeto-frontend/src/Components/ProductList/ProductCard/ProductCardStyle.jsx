import styled from "styled-components";

export const ProductCardContainer = styled.div`
    border: 1px solid #FFFFFF;
    width: 17em;
    height: 27em;
    display: flex;
    flex-direction: column;
    background-color: #101010 ;
    justify-items: stretch;
    align-items: stretch;
`

export const ImageContainer = styled.div`
    height: 21em;
    width: 17em;
`

export const Image = styled.img`
    height: 17em;
    width: 16.85em;
`

export const NewDiv = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    background-color: blue;
   
`

export const Description = styled.div`
    color: white;
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
        background-color: #AEA9A9;
    }
`