import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  // font-size: 10px;

  // 10px / 16px = 0.625 = 62.5%
  // Percentage of user's browser font-size setting
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  line-height: 1;
  font-weight: 400;
  color: #555;
}
`;
