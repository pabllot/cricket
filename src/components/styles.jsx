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

    .btn {
        background: #5E5DF0;
        border-radius: 999px;
        box-shadow: #5E5DF0 0 10px 20px -10px;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        opacity: 1;
        outline: 0 solid transparent;
        padding: 8px 18px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        width: fit-content;
        word-break: break-word;
        border: 0;
        margin-right: 4px; ////////// change to gap
        margin-top: 2px;
        }
`;