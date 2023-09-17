import { Layout, Space } from 'antd';
import React from 'react';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import DesktopTablet from '@/components/Responsive/DesktopTablet';

import { AdminLayoutStyled } from './AdminLayout.styled';
import Menu from './components/Menu';

const { Content } = Layout;

interface ILayoutProps {
  children: React.ReactNode;
  showBreadcrump?: boolean;
}

const AdminLayout: React.FC<ILayoutProps> = ({ children, showBreadcrump }) => {
  return (
    <AdminLayoutStyled hasSider>
      <DesktopTablet>
        <Menu />
      </DesktopTablet>
      <Layout>
        <Content className="container">
          <div>
            <Space direction="vertical" style={{ width: '100%' }}>
              {showBreadcrump && <Breadcrumb />}
              {children}
            </Space>
          </div>
        </Content>
      </Layout>
    </AdminLayoutStyled>
  );
};

// TODO: theme support

export default AdminLayout;
