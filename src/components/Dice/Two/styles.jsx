import styled from "styled-components"

export const Container = styled.div`
width: 9rem;
height: 9rem;
border-radius: 5px;
background: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

.diceUp {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: wheat;
    margin-left: 4rem;
}
.diceDown {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: wheat;
    margin-right: 4rem;
}
`