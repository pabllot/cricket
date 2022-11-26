import styled from "styled-components"


export const Container = styled.div`
    height: 100vh;  
    background-color: blue;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .current {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    }

    .undef {
        position: absolute;
        top:38%;
        display: flex;
        gap: 10px;
    }

    .hidden {
        display: none;
    }

    .btn {
        background: #fafafa;
        border-radius: 25px;
        box-shadow: #000000 0 4px 20px -10px;
        box-sizing: border-box;
        color: #000000;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
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

        .btnWrapper {
            margin-top: 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 60px;
        }
`;