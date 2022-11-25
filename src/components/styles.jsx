import styled from "styled-components"

export const Container = styled.div`
    width: 700;
    height: 100vh;  
    background-color: white;
    position: relative;
    
    .current {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    }

    .undef {
        position: absolute;
        top:0;
        display: flex;
        gap: 10px;
    }

    .hidden {
        display: none;
    }
`;