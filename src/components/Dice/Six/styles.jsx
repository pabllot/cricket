import styled from "styled-components"

export const Container = styled.div`
width: 9rem;
height: 9rem;
border-radius: 5px;
background: black;
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr;

.diceSix {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: wheat;
    margin-left: 25px;
}
`