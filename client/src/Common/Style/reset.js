import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color: #121212;
        color: white;
    }
    button{
      background:none;
      border:none;
    }
    p{
      -webkit-box-align: center;
      align-items: center;
      color: inherit;
      text-decoration: none;
    }

    .canvas {
      margin:auto;
      width:1600px;
      height:1028px;
    }

    .img {
      width:100%;
      height:100%;
      max-width:100%;
      max-height:100%;
      
    }
`;

export default GlobalStyles;
