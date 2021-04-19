import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000;
    --black-800: #111;

    --gray: #888;
    --gray-700: #333;
    
    --white: #fff;

    --blue: #0070f3;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--black);
    color: var(--gray);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;