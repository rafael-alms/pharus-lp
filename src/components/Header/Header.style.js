import styled from "styled-components";

export const Container = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 48px;
    left: 99px;
    right: 99px;

    @media (max-width: 768px) {
        top: 21px;
        left: 0;
        right: 0;
    }
`;

export const Logo = styled.div `
    display: flex;

    .logoRoxa img {
        width: 318px;
        height: 69px;
    }
    
    @media (max-width: 768px) {
        margin-left: 16px;

        .logoRoxa img {
            width: 240px;
            height: 52px;
        }
    }
`;