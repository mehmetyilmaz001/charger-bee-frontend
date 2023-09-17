import { Button } from 'antd';
import type { GetStaticProps } from 'next/types';
import React from 'react';

import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import { makeStaticProps } from '@/utils/locale';

const DashboardPage = () => {
  return (
    <AdminLayout>
      Admin Dashboard
      <Button type="primary">Test</Button>
    </AdminLayout>
  );
};

export default DashboardPage;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);
