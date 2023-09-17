import { Layout } from 'antd';
import { styled } from 'styled-components';

export const AdminLayoutStyled = styled(Layout)`
  height: 100vh;
  padding: ${(props) => props.theme.antd.padding}px;

  .container {
    padding: ${(props) => props.theme.antd.paddingXL}px;
    background: ${(props) => props.theme.antd.colorBgBase};
    border-radius: 30px;
    box-shadow: rgb(227 227 227) 0px -3px 14px 0px;
    min-height: 100%;
  }
`;
