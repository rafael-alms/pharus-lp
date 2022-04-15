import styled from "styled-components";

export const Container = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 88px;
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

    .logoBranca img {
        width: 318px;
        height: 69px;
    }

    .logoPreta {
        display: none;
    }
    
    @media (max-width: 768px) {
        margin-left: 16px;

        .logoPreta {
            display: flex;
        }

        .logoPreta img {
            width: 240px;
            height: 52px;
        }

        .logoBranca {
            display: none;
        }
    }
`;