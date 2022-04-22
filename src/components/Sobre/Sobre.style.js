import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 48px;

    .texto {
        display: flex;
        flex-direction: column;
        margin-top: 97px;
    }

    .hidden {
        display: none;
    }

    button {
        background: #5C25C6;
        color: #F1F1F2;
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        border-radius: 16px;
        width: 40vw;
        height: 56px;
        margin-top: 74px;
    }

    button:hover {
        background: #792DE9;
    }

    button:active {
        background: #3C20B1;
    }

    button:focus {
        background: #5C25C6;
    }

    .titulo {
        margin-bottom: 50px;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 56px;
        margin-left: 32px;
    }

    .conteudo {
        display: flex;
        flex-direction: row;
    }

    .dados {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 34px;
        line-height: 41px;
        margin-left: 32px;
    }

    .mascote {
        margin-top: 57px;
    }

    .convite {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 34px;
        line-height: 41px;
        margin-top: 45px;
    }

    .redes {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 48px;
        margin-bottom: 48px;
    }

    @media (max-width: 768px) {
        padding-top: 49px;
        padding-left: 5%;
        padding-right: 5%;

        .titulo:first-child {
            display: none;
        }

        .texto {
            margin-top: 16px;
        }

        .dados {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            margin-left: 0;
        }

        button {
            font-size: 18px;
            line-height: 22px;
            width: 100%;
            height: 48px;
            margin: 0;
        }

        .titulo {
            margin-top: 56px;
            margin-bottom: 22px;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 34px;
            text-align: center;
            display: flex;
        }

        .conteudo {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .mascote {
            margin: 0;
            width: 157px;
            height: 122px;
        }

        .convite {
            font-family: 'Open Sans';
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            margin-top: 24px;
        }

        .redes {
            margin-top: 12px;
            margin-bottom: 28px;
        }

        .redes img {
            width: 56px;
            height: 56px;
        }
    }
`;