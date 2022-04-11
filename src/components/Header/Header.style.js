import styled from "styled-components";

export const Container = styled.header `
    display: flex;
    justify-content: space-between;
    //align-items: center;
    position: fixed;
    //height: 90px;
    //background-color: #F48958;
    top: 0;
`;

export const Logo = styled.div `
    display: flex;
    margin-top: 88px;
    margin-left: 99px;
    margin-right: 106px;

    .logo img {
        width: 318px;
        height: 69px;
    }
    
    @media (max-width: 768px) {
        margin-top: 21px;
        margin-left: 16px;
        margin-right: 0;

        .logo img {
            width: 240px;
            height: 52px;
        }
    }
`;