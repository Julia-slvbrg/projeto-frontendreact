import styled from "styled-components"

export const CartContainer = styled.div` 
    min-height: 25em;
    border: 1px solid #FFFFFF;
    padding: 1em .5em;
`

export const CartTitle = styled.h1`
    font-size: 1.5em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #FFFFFF;
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
    font-weight: 600;
    color: #FFFFFF;
`

export const RemoveButton = styled.button`
    color: #000000;
    height: 1.8em;
    border-radius: .4em;
    border-color: gray;
    &:hover{
        background-color: grey;
    }

    &:active{
        background-color: #C0C0C0;
        color:#000000;
    }
`


