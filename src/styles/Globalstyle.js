import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  i{
    padding: .5rem;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`

export default globalStyle