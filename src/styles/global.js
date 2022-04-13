import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    background-color: #F1F1F2;
  }

  html, body{
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
  }
`;