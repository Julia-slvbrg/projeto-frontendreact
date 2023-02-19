import styled from "styled-components"

export const CartContainer = styled.div` 
    min-height: 25em;
    border: 1px solid black;
    padding: 1em .5em;
`

export const CartTitle = styled.h1`
    font-size: 1.5em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #000000;
`

export const CartList = styled.div`
    display: grid;
    grid-template-columns: .5fr 1fr 1fr;
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    margin-top: 1em;
`

export const Product = styled.p`
    font-size: .95em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: #000000;
`

export const RemoveButton = styled.button`
   color: #000000;
   height: 1.8em;

   &:hover{
    background-color: grey;
   }

   &:active{
    background-color: purple;
    color:#A09C9C;
   }
`


