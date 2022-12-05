import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    list-style: none;
    box-sizing: border-box;
    border: 0px;



    button{
      padding: 8px;
    background-color: #27AE60;
    color: #ffffff;
    border-radius: 5px;

    }

    h2{
      font-size: 18px;
    }
  }
`
export default GlobalStyle