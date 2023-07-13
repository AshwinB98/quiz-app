import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing : border-box;
        padding : 0;
        margin : 0;
    }
    body {
        font-family: 'Nunito', sans-serif;
    }
`;

export default GlobalStyles;
