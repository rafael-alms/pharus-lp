import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    position: relative;
    left: 99px;
    right: 99px;
    //height: 650px;

    @media (max-width: 768px) {
        left: 0;
        right: 0;
        margin-bottom: 48px;
        flex-direction: column-reverse;
        display: flex;
        align-items: center;
    }
`;

export const Imagem = styled.div `
    @media (min-width: 769px) {
        margin-top: 120px;
        margin-right: 99px;
        width: 40vw;
    }
    
    @media (max-width: 768px) {
        margin-top: 48px;
        margin-right: 0;

        img {
            width: 232px;
            height: 175px;
        }
    }
`;

export const Texto = styled.div `
    display: flex;
    flex-direction: column;
    margin-right: 61px;
    width: 45vw;

    .titulo {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        margin-bottom: 72px;
    }

    .conteudo {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-align: justify;
    }

    .paragrafo {
        margin-top: 25px;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        width: 90%;
        margin: 0;

        .titulo {
            font-weight: 600;
            font-size: 34px;
            display: flex;
            justify-content: center;
        }

        .conteudo {
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            width: 100%;
        }
    }
`;
