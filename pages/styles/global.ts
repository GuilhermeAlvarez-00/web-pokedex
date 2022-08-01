import { createGlobalStyle } from 'styled-components'

export const GlobalSyles = createGlobalStyle`
   * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	 }

	 :root {
		--red600: #BE1411;
		--gray500: #6D6D6D;
		--black700: #252525;
		--gray300: #C6C6C6;
		--green500: #3BB18B;
		--purple500: #80459F;
		--orange500: #FF8020;
		--gray400: #363636;
		--blue500: #54ABFF;
		--gray100: #EDEDED;
		--white: #fff;
	 }

	 html {
		font-size: 62.5%;
	 }

	 body {
		background-color: var(--black700);
		color: var(--white);
		font-family: 'Poppins', sans-serif;
	 }

	 h1, h2, h3, h4, h5, h6 {
		font-family: 'Montserrat', sans-serif;
	 }

	 a {
		color: inherit;
		text-decoration: none;
	 }

	 ul {
		list-style: none;
	 }

	 button {
		cursor: pointer;
	 }
`
