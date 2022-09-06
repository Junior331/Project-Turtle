import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url("https://use.typekit.net/dwx8wuw.css");
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    scroll-behavior: smooth;
    font-size:${(props: { theme: { typography: { htmlFontSize: any } } }) =>
      props.theme.typography.htmlFontSize};
  }

  body {
    width: 100%;
    height: auto;
    font-family: "Roboto";
  }
`;
