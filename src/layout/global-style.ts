import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
  }

  .navigation {
    display: inline-flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin-bottom: 40px;
  }
`
