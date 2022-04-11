import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin-left: 99px;
    margin-right: 99px;
    width: 100%;

    .titulo {
        margin-top: 248px;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 34px;
        margin-bottom: 50px;
    }

    .conteudo {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px; 
        text-align: justify;
        width: 40vw;
        margin-top: 25px;
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

    @media (max-width: 768px) {
        margin: 0;
        margin-top: 84px;
        flex-direction: column; 
        display: flex;
        align-items: center;

        .titulo {
            margin-top: 71px;
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
            width: 90vw;
            margin-top: 25px;
            margin-right: 0;
        }

        button {
            background-color: #787780;
            width: 100%;
            height: 48px;
            margin-top: 64px;
        }
    }
`;

export const Imagem = styled.div `
    margin-top: 248px;
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
        margin: 0;
        margin-top: 84px;
        display: flex;
        justify-content: center;

        .telas {
            margin: 0;
        }
        
        .telas img {
            width: 343px;
            height: 257px;
        }
    }
`;