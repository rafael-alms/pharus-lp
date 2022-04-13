import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    top: 91px;
    left: 99px;
    right: 99px;
    margin-bottom: 88px;

    @media (min-width: 769px) {
        position: relative;
        
        .titulo {
            margin-top: 91px;
            margin-bottom: 50px;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 34px;
        }

        .conteudo {
            font-weight: 600;
            font-size: 16px;
            line-height: 20px; 
            text-align: justify;
            width: 40vw;
            margin-top: 25px; //alinha 2º parágrafo
            margin-right: 145px;
        }

        button {
            background-color: #AFAEB3;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 24px;
            border-radius: 16px;
            width: 40vw;
            height: 56px;
            margin-top: 36px;
        }
    }

    @media (max-width: 768px) {
        margin-top: 71px;
        flex-direction: column; 
        display: flex;
        align-items: center;

        .titulo {
            margin-top: 71px;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 22px;
            display: flex;
            justify-content: center;
        }

        .conteudo {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px; 
            text-align: justify;
            width: 90%;
            margin-top: 25px; //alinha 2º parágrafo
            margin-left: 5%;
        }

        button {
            background-color: #787780;
            font-family: 'Montserrat';
            font-weight: 600;
            font-size: 20px;
            border-radius: 16px;
            width: 90%;
            height: 48px;
            margin-top: 64px;
            margin-left: 5%;
            margin-bottom: 97px;
        }
    }
`;

export const Imagem = styled.div `
    margin-top: 91px;
    margin-right: 99px;
    width: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .telas {
        margin-right: 99px;
    }

    .telas img {
        width: 500px;
        height: 397px;
    }
    
    @media (max-width: 768px) {
        margin-top: 72px;
        margin-right: 0;

        .telas {
            margin-right: 0;
        }
        
        .telas img {
            width: 343px;
            height: 257px;
        }
    }
`;