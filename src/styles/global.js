import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }
body {
    background-color: #270E37;
    color: white;

    font-family: 'Roboto', sans-serif;
    /* font-family: 'Pixel Text'; */
}

p {
    font-size: 15px;
}

`;
