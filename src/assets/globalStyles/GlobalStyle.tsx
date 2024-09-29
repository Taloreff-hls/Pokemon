import { createGlobalStyle } from "styled-components";
import colors from "../constants/colors";

const GlobalStyle = createGlobalStyle`
  /* CSS reset */
  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;
  }

  body {
    box-sizing: border-box;
    margin: 0 !important; /* Enforce margin to be 0 */
    padding: 0;
    min-height: 100vh;
    background-color: ${colors.neutrals[100]};
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
