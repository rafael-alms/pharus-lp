import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    position: relative;
    top: 48px;
    margin-left: 99px;
    margin-bottom: 118px;
    margin-right: 130px;

    @media (max-width: 768px) {
        top: 0;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 48px;
        flex-direction: column-reverse;
    }
`;

export const Image = styled.div `
    margin-top: 91px;
    margin-left: 61px;
    
    @media (max-width: 768px) {
        margin-left: 0;

        img {
            width: 300px;
            height: 250px;
        }
    }
`;

export const Text = styled.div `
    display: flex;
    flex-direction: column;
    text-align: justify;
    margin-top: 48px;
    margin-right: 61px;
    width: 60%;

    .titulo {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        justify-content: flex-start;
        margin-bottom: 72px;
    }

    .conteudo {
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
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
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
        }
    }
`;
