import styled from "styled-components";

export const FilterContainer = styled.div`
    min-height: 25em;
    border-left: 1px solid #FFFFFF;
    border-right: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    padding: 1em .5em;
`

export const FilterTitle = styled.h1`
    font-size: 1.5em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: #FFFFFF;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 1em;
`

export const StyledLabel = styled.label`
    font-size: 1.0em;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    color: #FFFFFF;
`

export const Input = styled.input`
    margin-bottom: 1em;
    width: 17rem;
    height: 1.8em;
    border-radius: .2em;
    border: #202020 solid 1px;
    padding-left: .5em
`