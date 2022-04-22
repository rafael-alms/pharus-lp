import styled from "styled-components";

export const Container = styled.div `
    .popup {
        position: fixed;
        top: 25px;
        left: 5%;
        width: 90%;
        height: 676px;
        background-color: #FDDCA1;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        z-index: 20;
        border-radius: 16px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }

    .popup-inner {
        position: relative;
        padding: 32px;
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: row;
    }

    .popup-inner .close-btn {
        position: absolute;
    }

    .title {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        margin: 0;
    }

    .conteudo {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        width: 100%;
    }

    .conteudo1{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-right: 200px;
    }

    .conteudo2 {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .inputs {
        display: flex;
        flex-direction: column;
    }

    label {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        padding-bottom: 16px;
        text-align: left;
    }

    input {
        background-color: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid #AFAEB3;
        outline: 0;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    }

    .btn {
        margin-bottom: 80px;
    }

    .close-btn {
        background-color: transparent;
        border: 2px solid #5C25C6;
        color: #5C25C6;
        right: 30px;
    }

    .close-btn:hover {
        border: 3px solid #5C25C6;
        background-color: transparent;
    }

    @media (min-width: 769px) {
        button {
            background: #5C25C6;
            color: #F1F1F2;
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 20px;
            border-radius: 16px;
            width: 348px;
            height: 56px;
            margin-top: 74px;
        }

        button:hover {
            background: #792DE9;
        }
    }

    button:active {
        background: #3C20B1;
        }

    button:focus {
        background: #5C25C6;
    }

    @media (max-width: 768px) {
        .popup {
            position: fixed;
            top: 25px;
            left: 5%;
            width: 90%;
            height: 500px;
            background-color: #FDDCA1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 20;
            border-radius: 16px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        }

        .popup-inner {
            position: relative;
            width: 90%;
            display: flex;
            flex-direction: column;
            padding: 0;
        }

        .popup-inner .close-btn {
            position: absolute;
        }

        .title {
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            margin-top: 0;
            margin-left: 0;
            margin-bottom: 25px;
        }

        .conteudo {
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            width: 100%;
        }

        .conteudo1{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin-right: 0;
        }

        .conteudo2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .btn {
            margin-top: 24px;
            margin-bottom: 24px;
            width: 100%;
        }

        .close-btn {
            background-color: transparent;
            border: 2px solid #5C25C6;
            color: #5C25C6;
            right: 0;
        }

        button {
            background: #5C25C6;
            color: #F1F1F2;
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 18px;
            border-radius: 16px;
            width: 100%;
            height: 48px;
            margin-top: 16px;
            margin-left: 0;
        }

        label {
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            padding-bottom: 16px;
            text-align: left;
            margin-top: 32px;
        }

        input {
            background-color: transparent;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 2px solid #AFAEB3;
            outline: 0;
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
        }

        img {
            display: none;
        }
    }
`;