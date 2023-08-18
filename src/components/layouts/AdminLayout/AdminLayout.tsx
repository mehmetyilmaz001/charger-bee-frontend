import React from 'react';
import Image from 'next/image';
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
import { useRouter } from 'next/router';

const { Header, Content, Footer, Sider } = Layout;


const menuItems: MenuProps["items"] = [
  {
    key: "/admin",
    icon: <AppstoreOutlined />,
    label: "Dashboard"
  },
  {
    key: "/admin/users",
    icon: <UserOutlined />,
    label: "Users"
  }
]


interface ILayoutProps {
  children: React.ReactNode;
  showBreadcrump?: boolean;
}

const AdminLayout: React.FC<ILayoutProps> = ({ children, showBreadcrump }) => {
  const { t } = useTranslation("common");

  const { token: { colorBgContainer } } = theme.useToken();
  const rouuter = useRouter();

  return (
    <Layout hasSider className="admin-layout">
      <Sider className="sider" theme='light'>
        <div className="logo"><Image width={0} height={0} src="/images/logo.svg" alt="logo" sizes='100vh' style={{ width: '100%', height: 'auto' }} /></div>
        <Menu className="menu" theme="light" mode="inline" defaultSelectedKeys={['4']} items={menuItems} onClick={(menuItem) => {
          rouuter.push(menuItem.key)
        }} />
      </Sider>
      <Layout className="">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: colorBgContainer }}>
            <Space direction="vertical" style={{ width: "100%" }}>
              {showBreadcrump && <Breadcrump />}
              {children}
            </Space>
          </div>
        </Content>
        <Footer>{t("footer.politic.cookie")}</Footer>
      </Layout>
    </Layout>
  );

};

export default AdminLayout;

