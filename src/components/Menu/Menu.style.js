import styled from "styled-components";

export const Menu = styled.div`
  margin-right: 85px;
  width: 60vw;
`;

export const Hamburguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 33px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
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
  white-space: nowrap;
  margin-top: 88px;
  margin-right: 99px;
  justify-content: space-evenly;
  position: static;

  li {
    font-size: 24px;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
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
    top: -68px;
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
      font-family: "Open Sans", sans-serif;
    }

    li:first-child {
      display: block;
      font-size: 24px;
      font-weight: 700;
      font-family: "Montserrat", sans-serif;
      padding-bottom: 10px;
    }
  }
`;
