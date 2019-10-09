import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* dark color scheme */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #444;
      color: #e4e4e4;
      }
    a {
      color: #e4e4e4;
      }
    img {
      filter: grayscale(30%);
      }
    }

  /* light color scheme */
  @media (prefers-color-scheme: light) {
    body {
      color: #444;
      }
    a {
      color: black;
      }
    }

  /* common styles */
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`
