import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base styles */
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    background-color: #f7f8fa;
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  p {
    margin: 0 0 1rem 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol {
    margin: 0 0 1rem 0;
    padding-left: 1.5rem;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  /* Additional styles */
  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
