import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem => 10px | 1.6rem => 16px */
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
