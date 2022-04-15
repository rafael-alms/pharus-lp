import styled from "styled-components";

export const Menu = styled.div`
  width: 60%;
  margin-right: 99px;

  @media (max-width: 768px) {
    width: 2rem;
    margin-right: 16px;
  }
`;

export const Hamburguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: ${({ open }) => (open ? "fixed" : "relative")};
  z-index: 20;
  display: none;
  top: ${({ open }) => (open ? "2rem" : "0")};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  margin-right: 99px;

  li {
    font-size: 24px;
    font-weight: 500;
    font-family: "Montserrat";
    cursor: pointer;
  }

  li:first-child {
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #f1f1f2;
    position: fixed;
    display: flex;
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: 10;
    top: 21px;
    right: 0;
    margin-right: 0;
    border-radius: 16px;
    height: 285px;
    width: 100vw;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

    li {
      color: #000;
      font-weight: 600;
      font-size: 16px;
      font-family: "Open Sans";
    }

    li:first-child {
      display: block;
      font-size: 24px;
      font-weight: 700;
      font-family: "Montserrat";
      padding-bottom: 10px;
    }
  }
`;
