import React from 'react';
import { Layout, Space } from 'antd';
import Menu from './components/Menu';
import { AdminLayoutStyled } from './AdminLayout.styled';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

const { Content } = Layout;


interface ILayoutProps {
  children: React.ReactNode;
  showBreadcrump?: boolean;
}

const AdminLayout: React.FC<ILayoutProps> = ({ children, showBreadcrump }) => {
  return (
    <AdminLayoutStyled hasSider>
      <Menu />
      <Layout>
        <Content className="container">
          <div>
            <Space direction="vertical" style={{ width: "100%" }}>
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
