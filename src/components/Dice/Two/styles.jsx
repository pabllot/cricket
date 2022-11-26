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
border: 2px solid white;


.diceUp {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: wheat;
    margin-left: 3.4rem;
    margin-top: 1.2rem;
}
.diceDown {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: wheat;
    margin-right: 3.4rem;
    margin-bottom: 1.2rem;
}
`