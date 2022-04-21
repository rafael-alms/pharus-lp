import styled from "styled-components";

export const Container = styled.div `
    @media (min-width: 769px) {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        padding-top: 106px;
        
        .titulo {
            font-family: 'Montserrat';
            text-align: center;
            font-weight: 700;
            font-size: 45px;
            color: #F1F1F2;
            margin-top: 48px;
            margin-bottom: 40px;
        }

        .sliderStyle {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            margin-top: 60px;
            margin-left: 5%;
            padding-right: 150px;
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
            padding-right: 100px;
        }
    }
`;

export const Card = styled.div `
    background: #FCBA7A;
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
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        width: 95%;
        height: 30%;
    }

    .identificacao {
        background: #FDDCA1;
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
    }
`;