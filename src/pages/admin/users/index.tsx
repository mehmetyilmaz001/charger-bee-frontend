import type { GetStaticProps } from 'next/types';
import React from 'react';

import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import ListUsers from '@/features/User/ListUsers/ListUsers';
import { makeStaticProps } from '@/utils/locale';

const UsersPage = () => {
  return (
    <AdminLayout>
      <ListUsers />
    </AdminLayout>
  );
};

export default UsersPage;

export const getStaticProps: GetStaticProps = makeStaticProps([
  'common',
  'user',
]);
