import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif; // AmberStudent uses Inter font
    background-color: #ffffff;
    color: #1a202c;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;