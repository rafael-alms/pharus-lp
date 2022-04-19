import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    top: 91px;
    left: 99px;
    right: 99px;

    @media (min-width: 769px) {
        position: relative;
        height: 750px;
        
        .titulo {
            margin-bottom: 50px;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 56px;
            width: 40vw;
            white-space: nowrap;
        }

        .conteudo {
            font-family: 'Montserrat';
            font-weight: 500;
            font-size: 20px;
            line-height: 24px; 
            text-align: justify;
            width: 40vw;
            margin-top: 25px;
            margin-right: 145px;
        }

        button {
            background: #5C25C6;
            color: #F1F1F2;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 24px;
            border-radius: 16px;
            width: 40vw;
            height: 56px;
            margin-top: 74px;
        }

        button:hover {
            background: #6D36D7;
        }
    }

    button:active {
        background: #4B14B5;
        }

    @media (max-width: 768px) {
        margin-bottom: 88px;
        flex-direction: column; 
        display: flex;
        align-items: center;

        .titulo {
            margin-top: 56px;
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 22px;
            text-align: center;
            width: 90%;
            display: flex;
            justify-content: center;
            margin-left: 5%;
        }

        .conteudo {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px; 
            text-align: justify;
            width: 90%;
            margin-top: 25px;
            margin-left: 5%;
        }

        button {
            background: #5C25C6;
            color: #F1F1F2;
            font-family: 'Montserrat';
            font-weight: 600;
            font-size: 14px;
            border-radius: 16px;
            width: 90%;
            height: 32px;
            margin-top: 64px;
            margin-left: 5%;
            margin-bottom: 97px;
        }
    }
`;

export const Imagem = styled.div `
    margin-top: 160px;
    margin-right: 99px;
    width: 40vw;
    display: flex;
    justify-content: center;

    .telas {
        margin-right: 200px;
        
    }
    
    @media (max-width: 768px) {
        margin-top: 48px;
        margin-right: 0;

        .telas {
            margin-right: 0;
        }
        
        .telas img {
            width: 343px;
            height: 206px;
        }
    }
`;