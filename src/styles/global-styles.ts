import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box
  }

  html{
    font-size: 62.5%
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  body{
    background-color: ${({ theme }) => theme.colors.dark};
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
  }
`;
