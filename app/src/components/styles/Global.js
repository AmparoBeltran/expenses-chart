import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  
    
    color: ${({ theme }) => theme.colors.darkBrown};
    background-color: ${({ theme }) => theme.colors.cream};
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  
  body {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
  
  h1, h3, p {
    margin: 0;
  }  
`;

export default GlobalStyles;
