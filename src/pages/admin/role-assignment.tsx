import Head from 'next/head';
import type { GetStaticProps } from 'next/types';
import React from 'react';

import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import RoleAssignment from '@/features/User/RoleAssignment/RoleAssignment';
import { makeStaticProps } from '@/utils/locale';

const UsersPage = () => {
  return (
    <AdminLayout showBreadcrump>
      <Head>
        <title>Role Assignment</title>
      </Head>
      <RoleAssignment />
    </AdminLayout>
  );
};

export default UsersPage;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);
