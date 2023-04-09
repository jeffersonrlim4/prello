import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    font: 14px 'Robot', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiesed !important;
  }

  ul {
    list-style: none;
  }

`