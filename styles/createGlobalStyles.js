import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      background: #eee;
      font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    main {
      margin: 0 auto;
      padding: 20px;
      background-color: #FFF;
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

`;

export default GlobalStyles;