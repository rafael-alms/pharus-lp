import styled from "styled-components";

export const Container = styled.div `
    @media (min-width: 769px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        position: relative;
        width: 100%;
        top: 48px;
        left: 99px;
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
        margin-top: -43px;
        margin-right: 201px;
        width: 30vw;
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
    color: #F1F1F2;

    .titulo {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 56px;
        margin-top: 48px;
        margin-left: 99px;
        margin-bottom: 38px;
    }

    .info{
        display: flex;
        flex-direction: row;
        width: 55vw;
    }

    .porcentagem {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 56px;
        line-height: 68px;
        text-align: center;
        margin-right: 65px;
    }

    .descricao {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 34px;
        line-height: 41px;
    }

    .fonte {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        padding-top: 20px;
    }

    .imagemCelular {
        display: none;
    }

    @media (min-width: 769px) {
        .cards {
            display: flex;
            flex-wrap: wrap;
            margin-left: -29px;
            margin-top: 51px;
        }
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
            text-align: center;
            font-size: 34px;
            margin-top: 0;
            margin-left: 5%;
            margin-bottom: 53px;
            width: 100%;
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
            font-size: 34px;
            line-height: 41px;
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

        .fonte {
            display: none;
        }

        .imagemCelular {
            display: flex;
            width: 127px;
            height: 200px;
        }

        .cards {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 0;
            margin-top: 20px;
        }
    }
`;

export const Card = styled.div `
    background: #3C20B1;
    color: #F1F1F2;
    border-radius: 12px;
    width: 25.5vw;
    height: 173px;
    margin-left: 29px;
    margin-bottom: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    transform: ${({ click }) => (click ? "rotateY(180deg)" : "")};
    transition: transform 0.8s;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);

    

    .girado {
        display: none;
        display: ${({ click }) => (click ? "flex" : "")};
        transform: rotateY(180deg);
        justify-content: center;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
    }

    .title {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 90%;
    }

    img {
        display: ${({ click }) => (click ? "none" : "")};
    }

    .dados {
        text-align: center;
        width: 97.5%;
    }

    .numeroCard {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 45px;
        display: ${({ click }) => (click ? "none" : "")};
    }

    .descricaoCard {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        display: ${({ click }) => (click ? "none" : "")};
    }
    
    @media (max-width: 768px) {
        margin-left: 0;
        padding-bottom: 24px;
        width: 100%;
        height: 170px;

        .numeroCard {
            font-size: 34px;
        }

        .descricaoCard {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
        }

        .girado {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
        }

        .aumento {
            width: 46px;
            height: 30px;
        }

        .crianca {
            width: 18px;
            height: 47px;
        }

        .noSchool {
            width: 60px;
            height: 60px;
        }

        .desemprego {
            width: 46px;
            height: 45px;
        }
    }
`;