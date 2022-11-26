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

.diceTop {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: wheat;
    margin-left: 4.5rem;
    margin-top: 5px;
}
.diceBottom {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: wheat;
    margin-right: 4.5rem;
    margin-bottom: 5px;
}
.diceCenter {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: wheat;
   
}
`