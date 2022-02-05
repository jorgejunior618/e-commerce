import { createGlobalStyle } from 'styled-components'
import NunitoTTF from '../fonts/Nunito-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoTTF}) format('trueType');
  }

  * {
    padding: 0;
    margin: 0;
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.defaultFont};
    transition-duration: .4s;
    box-sizing: border-box;
  }
  a, h2, h3, p, strong, span {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.defaultFont};
  }
  h1 {
    font-size: 2.6rem;
    color: ${({ theme }) => theme.colors.background};
  }
  h2 {
    font-size: 1.5rem;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
  }
  input, button, textarea, select {
    font-family: 'Nunito', sans-serif;
  }
  input:focus, textarea:focus, select:focus, button, button:focus{
    outline: none;
  }

  button {
    background: none;
    border: none;
  }

  main {
    height: calc(100vh - 117px);
  }

  .container {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  .button {
    border-radius: 5px;
    padding: 8px 15px;
    margin-left: 15px;
    width: fit-content;
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary}; 
    border-radius: 8px;
    transition-duration: box-shadow 0.6s;
    &:hover {
      box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.tertiary}; 
    }
  }
`

export default GlobalStyle;
