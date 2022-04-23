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
        flex-direction: column;
        justify-content: center;
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
        flex-direction: column;
    }

    .popup-inner .close-btn {
        position: absolute;
    }

    .titulo {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
    }

    .conteudo {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
    }

    .paragrafo {
        margin-top: 25px;
    }

    .texto-img {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    a {
        color: #C3104A;
        text-decoration: underline;
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 24px;
    }

    a:hover {
        color: #EE4C8E;
    }

    a:active {
        color: #EA8642;
    }

    @media (min-width: 769px) {
        .titulo {
            margin-bottom: 48px;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 34px;
            text-align: left;
        }

        .conteudo {
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 24px;
            line-height: 29px; 
            text-align: justify;
            margin-right: 145px;
        }

        button {
            background: #5C25C6;
            color: #F1F1F2;
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 20px;
            border-radius: 16px;
            width: 40vw;
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
            height: 85vh;
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
            width: 80%;
            display: flex;
            flex-direction: column;
            padding: 0;
        }

        .popup-inner .close-btn {
            position: absolute;
        }

        .titulo {
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 34px;
            line-height: 41px;
            margin-top: 0;
            margin-left: 5%;
            margin-bottom: 25px;
        }

        .conteudo {
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            text-align: justify;
        }

        .paragrafo {
            margin-top: 25px;
            margin-right: 0;
        }

        .texto-img {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        a {
            text-decoration: none;
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
        }

        button {
            background: #5C25C6;
            color: #F1F1F2;
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 18px;
            border-radius: 16px;
            width: 90%;
            height: 48px;
            margin-top: 16px;
            margin-left: 0;
        }

        img {
            width: 161px;
            height: 182px;
            margin-top: 29px;
        }
    }
`;