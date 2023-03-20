import styled from "styled-components"

export const CartContainer = styled.div` 
    min-height: 25em;
    border-left: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    padding: 1em .5em;
`

export const CartTitle = styled.h1`
    font-size: 1.5em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #FFFFFF;
`

export const CartList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1em 0;
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
        background-color: #CCC1C1;
    }

    &:active{
        background-color: #C0C0C0;
        color:#000000;
    }
`

export const Amount = styled.p` 
    font-size: 1.3em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #FFFFFF;
    margin-top: 1.5em;
`


