import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    z-index: 2;

  }
  *::-webkit-scrollbar-track {
    background: rgb(255, 255, 255, 0.1);
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 20px;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    background: var(--primary);
  }
  :root {
    --azul1: #3f7f93;
    --azul2: #74aac1;
    --azul3: #768a95;
    --azul4: #adbcbf;
    --branco1: #fff;
    --branco2: #f6f8fa;
    --preto: #121212;
  }
`;
