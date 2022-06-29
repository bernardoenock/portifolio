import { createGlobalStyle } from "styled-components";

import PixelText from "./assets/fonts/PixelText/PixelText.woff";

const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'Pixel Text';
    src: url(${PixelText}) format('woff');
}

`;

export default FontStyles;
