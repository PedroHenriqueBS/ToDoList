import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body, html, * {
    background-color: ${({ theme }) => theme.backgroundColor};
    /* background-color: #242424; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: sans-serif;
    /* scrollbar-color: #181818 green; Firefox */
    /* scrollbar-width: none; Firefox */

    ::-webkit-scrollbar {
      width: 8px; /* largura do scroll vertical */
      height: 8px; /* altura do scroll horizontal */
    }
    ::-webkit-scrollbar-track {
      background: green; /* cor do trilho */
      border-radius: 10px;
    }
    /* Estiliza a parte deslizante (polegar) */
    ::-webkit-scrollbar-thumb {
      background: #151515; /* cor do polegar */
      border-radius: 10px;
    }

  }
`;