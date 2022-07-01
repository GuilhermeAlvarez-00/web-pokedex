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

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
