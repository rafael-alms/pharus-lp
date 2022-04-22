import styled from "styled-components";

export const Container = styled.div `
    //Importado do react-ig-feed
    ._2R-kh {
        display: flex;
        overflow-x: scroll;
        padding-right: 99px;
    }
    ._wPDyp {
        flex: 0 0 calc(100%/6 - 10px);
        margin: 5px;
        display: block;
        position: relative;
        margin-left: 146px;
    }
    ._vzTHL {
        display: block;
        width: 271px;
        height: 271px;
        transition: .25s;
        -o-object-fit: cover;
        object-fit: cover;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 50%;
    }
    ._3xnQP {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 271px;
        height: 271px;
        z-index: 5;
        font-weight: 600;
        font-size: 12px;
        color: #fff;
        opacity: 0;
        border-radius: 50%;
    }
    ._3xnQP:hover {
        opacity: 1;
        background-color: #00000061;
    }

    @media (min-width: 768px) {
        ._2R-kh {

            ::-webkit-scrollbar-track {
                background-color: transparent;
            }
            ::-webkit-scrollbar {
                margin-top: 20px;
                width: 6px;
                height: 8px;
                background: transparent;
            }
            ::-webkit-scrollbar-thumb {
                background: #E5326C;
                border-radius: 16px;
            }
        }
    }

    @media (max-width: 480px) {
        ._2R-kh {
            padding-left: 2.5%;
        }

        ._wPDyp{
            flex: 0 0 calc(100%/2 - 10px);
            margin: 5px;
            margin-left: 25px;
        }

        ._vzTHL {
            width: 116px;
            height: 116px;
        }
        ._3xnQP {
            width: 116px;
            height: 116px;
        }
        
    }
  
    @media (min-width: 481px) and (max-width: 767px) {
        ._wPDyp {
            flex: 0 0 calc(100%/3 - 10px);
            margin: 5px;
        }
    }

    ._3lhLL{
        text-align: center;
        color: red;
        font-size: 18px;
    }
    //Fim css importado do react-ig-feed

    @media (min-width: 769px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        position: relative;
        width: 100%;
        padding-top: 56px;
        
        .titulo {
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 45px;
            line-height: 55px;
            color: #F1F1F2;
            margin-bottom: 70px;
            margin-left: 0;
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
            font-size: 20px;
            line-height: 24px;
            color: #F1F1F2;
            text-align: center;
            margin-bottom: 49px;
        }
    }
`;