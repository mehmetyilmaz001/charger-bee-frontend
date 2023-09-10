import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.antd.colorBgBase};
    // font-family: ${(props) => props.theme.fonts.main};
    // color: ${(props) => props.theme.colors.text};
  }

  a{
    color: ${(props) => props.theme.antd.colorPrimary};
  }
`;

export default GlobalStyle;
