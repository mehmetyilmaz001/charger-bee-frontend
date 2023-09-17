import Head from 'next/head';
import type { GetStaticProps } from 'next/types';
import React from 'react';

import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import SaveUserForm from '@/features/User/SaveUser/SaveUser';
import { makeStaticProps } from '@/utils/locale';

const SaveUser = () => {
  return (
    <AdminLayout showBreadcrump>
      <Head>
        <title>Save User</title>
      </Head>
      <SaveUserForm />
    </AdminLayout>
  );
};

export default SaveUser;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);
