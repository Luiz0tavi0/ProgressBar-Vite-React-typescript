import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`    
  html, body, #root {
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #ccc;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 18px;
  }
  main {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  
`;