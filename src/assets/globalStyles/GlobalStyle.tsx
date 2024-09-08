import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 10px;
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  #root{
  height:100%;
  }
`;

export default GlobalStyle;
