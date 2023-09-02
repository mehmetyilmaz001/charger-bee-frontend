import React from 'react';
import { Layout, Space, theme } from 'antd';
import Breadcrump from '@/components/Breadcrump/Breadcrump';
import Menu from './components/Menu';

import styles from './AdminLayout.module.scss';

const { Content } = Layout;


interface ILayoutProps {
  children: React.ReactNode;
  showBreadcrump?: boolean;
}

const AdminLayout: React.FC<ILayoutProps> = ({ children, showBreadcrump }) => {
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout hasSider className={styles.layout}>
      <Menu />
      <Layout>
        <Content>
          <div className={styles.container}>
            <Space direction="vertical" style={{ width: "100%" }}>
              {showBreadcrump && <Breadcrump />}
              {children}
            </Space>
          </div>
        </Content>
      </Layout>
    </Layout>
  );

};

// TODO: theme support

export default AdminLayout;
