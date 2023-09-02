import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.antd.colorPrimary};
    // font-family: ${(props) => props.theme.fonts.main};
    // color: ${(props) => props.theme.colors.text};
  }
`;

export default GlobalStyle;
