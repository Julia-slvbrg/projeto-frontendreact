import styled from "styled-components";

export const HomeContainer = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2em;
    padding: 0 1em;
`

export const HeaderHome= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
`

export const ProductQnt = styled.p`
    font-size: 1em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: #FFFFFF;
`

export const StyledLabel = styled.label`
    font-size: 1em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: #FFFFFF;
  
    select{
        font-size: 1em;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        margin-left: .5em;

        &:hover{
            background-color: #CCC1C1;
        }
    }
`

export const MainHome = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 1.5em;
    row-gap: 1.5em;
    align-items: center;
    justify-items: center; 
`