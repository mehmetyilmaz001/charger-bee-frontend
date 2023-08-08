import React from 'react';
import { Layout, Menu, Space, theme } from 'antd';
import { useTranslation } from 'next-i18next';
import type { MenuProps } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Breadcrump from '@/components/Breadcrump/Breadcrump';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));


interface ILayoutProps {
  children: React.ReactNode;
  showBreadcrump?: boolean;
}

const AdminLayout: React.FC<ILayoutProps> = ({ children, showBreadcrump }) => {
  const { t } = useTranslation("common");

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: colorBgContainer }}>
            <Space direction="vertical" style={{width: "100%"}}>
              {showBreadcrump && <Breadcrump />}
              {children}
            </Space>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{t("footer.politic.cookie")}</Footer>
      </Layout>
    </Layout>
  );

};

export default AdminLayout;

