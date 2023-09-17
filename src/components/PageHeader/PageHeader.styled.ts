import styled from 'styled-components';

export const PageHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.antd.marginMD}px;

  .title-breadcrump {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.antd.marginXS}px;
    h1 {
      font-size: ${(props) => props.theme.antd.fontSizeHeading1}px;
    }
  }
`;
