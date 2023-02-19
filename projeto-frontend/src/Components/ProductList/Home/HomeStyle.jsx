import styled from "styled-components";

export const HomeContainer = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    gap: 45em;

`

export const ProductQnt = styled.p`
    font-size: 1em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
`

export const StyledLabel = styled.label`
    font-size: 1em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  
    select{
        font-size: 1em;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        margin-left: .5em;

        &:hover{
            background-color: #80808085;
        }
    }
`