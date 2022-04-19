import styled from "styled-components";

export const Container = styled.div `
    @media (min-width: 769px) {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        top: 106px;
        height: 1069px;
        
        .titulo {
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 45px;
            color: #F1F1F2;
            margin-top: 48px;
            margin-left: 99px;
            margin-bottom: 29px;
        }

        .sliderStyle {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            margin-top: 60px;
            margin-left: 5%;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .titulo {
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 34px;
            color: #F1F1F2;
            margin-top: 48px;
            text-align: center;
        }

        .sliderStyle {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            margin-top: 60px;
            margin-left: 20%;
        }
    }
`;

export const Card = styled.div `
    background: #EA8642;
    border-radius: 16px;
    width: 606px;
    height: 323px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: grab;

    :active {
        cursor: grabbing;
    }

    .depoimento {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        width: 95%;
        text-align: center;
        height: 30%;
    }

    .identificacao {
        background: #FCBA7A;
        width: 100%;
        height: 55px;
        border-radius: 0px 0px 16px 16px;
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .profilePic {
        margin-top: -60px;
    }
    
    @media (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 24px;
        width: 252px;
        height: 405px;

        .depoimento {
            font-size: 14px;
            line-height: 17px;
            height: 55%;
            padding-left: 2%;
            padding-right: 2%;
        }

        .identificacao {
            height: 46px;
            font-family: 'Open Sans';
            font-weight: 700;
            font-size: 16px;
        }

        .profilePic {
            width: 64px;
            height: 64px;
            margin-top: -30px;
        }

        .estrelas {
            width: 200px;
            height: 36px;
        }
    }
`;