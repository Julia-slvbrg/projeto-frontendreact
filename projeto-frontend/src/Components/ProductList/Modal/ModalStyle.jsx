import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(56, 58, 58, 0.7);
    z-index: 1000;
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 100px;
    background-color: #fff;
    border-radius: 10px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CloseIcon = styled.span`
  cursor: pointer;
  position: fixed;
  top: 2em;
  right: 4em;
`
export const Name = styled.h2`
    color: #000;
    font-size: 2em;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    text-align: center;
`

export const Image = styled.img`
    height: 35vh;
    width: 15vw;
    margin: 1em 0;
`

export const Description = styled.p`
    color: #000;
    font-size: 1.2em;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
    text-align: center;
`