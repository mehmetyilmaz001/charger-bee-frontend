import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import { GetStaticProps } from 'next/types';
import { makeStaticProps } from '@/utils/locale';
import ListUsers from '@/features/User/ListUsers/ListUsers';
import Head from 'next/head';

const UsersPage = () => {
    return (
        <AdminLayout showBreadcrump>
            <Head>
                <title>Users</title>
            </Head>
            <ListUsers />
        </AdminLayout>
    );
};


export default UsersPage;

export const getStaticProps: GetStaticProps = makeStaticProps(["common"]);


