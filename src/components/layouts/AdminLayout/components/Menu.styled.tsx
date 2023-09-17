import { Layout } from 'antd';
import { styled } from 'styled-components';

export const SiderStyled = styled(Layout.Sider)`
  background-color: ${(props) => props.theme.antd.colorBgLayout}!important;
  position: unset !important;
  padding: 30px 0;
  min-height: 100%;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.antd.paddingXS}px;

    img {
      width: 70%;
      height: auto;
    }
  }

  .menu {
    background-color: ${(props) => props.theme.antd.colorBgLayout}!important;
  }
`;
