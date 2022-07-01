import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --gray100: #EDEDED;
    --gray300: #C6C6C6;
    --gray400: #363636;
    --gray500: #6D6D6D;
    --black700: #252525;
    --gree500: #3BB18B;
    --purple500: #80459F;
    --orange500: #FF8020;
    --blue500: #54ABFF;
    --red600: #BE1411;
  }

  html {
    font-size: 62.5%; /* 1rem => 10px | 1.6rem => 16px */
  }

  body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    color: var(--white);
    background-color: var(--black700);
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
