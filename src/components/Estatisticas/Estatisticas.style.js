import styled from "styled-components";

export const Container = styled.div `
    @media (min-width: 769px) {
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        width: 100%;
        top: 48px;
        left: 99px;
        height: 880px;
    }

    @media (max-width: 768px) {
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const Image = styled.div `
    @media (min-width: 769px) {
        margin-top: 171px;
        margin-right: 201px;
        width: 30vw;
        height: 626px;
        display: flex;
    }
    
    @media (max-width: 768px) {
        .imagemDesktop {
            display: none;
        }
    }
`;

export const Text = styled.div `
    display: flex;
    flex-direction: column;

    .titulo {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 56px;
        margin-top: 48px;
        margin-bottom: 62px;
    }

    .info{
        display: flex;
        flex-direction: row;
        width: 55vw;
    }

    .porcentagem {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 112px;
        margin-right: 65px;
    }

    .descricao {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 34px;
        line-height: 41px;
    }

    .imagemCelular {
        display: none;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        margin-left: -29px;
        margin-top: 51px;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 90%;
        margin: 0;

        .titulo {
            display: flex;
            justify-content: center;
            font-size: 34px;
            margin-bottom: 53px;
        }

        .contemInfo {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 62px;
        }

        .info{
            display: flex;
            flex-direction: column;
            width: 50%;
        }

        .porcentagem {
            font-size: 56px;
            margin-right: 0;
            text-align: center;
        }

        .descricao {
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
        }

        .imagemCelular {
            display: flex;
            width: 143px;
            height: 200px;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-left: 0;
        }
    }
`;

export const Card = styled.div `
    background: #CECED1;
    border-radius: 12px;
    width: 42%;
    height: 173px;
    margin-left: 29px;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    .dados {
        margin-left: 36px;
        width: 40%;
    }

    .numeroCard {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 45px;
    }

    .descricaoCard {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
    }
    
    @media (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 24px;
        width: 48%;
        height: 102px;

        img {
            width: 21px;
            height: 56px;
        }

        .dados {
            margin-left: 25px;
            width: 50%;
        }

        .numeroCard {
            font-size: 24px;
        }

        .descricaoCard {
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
        }
    }
`;