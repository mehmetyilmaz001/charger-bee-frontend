import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import { GetStaticProps } from 'next/types';
import { makeStaticProps } from '@/utils/locale';
import Head from 'next/head';
import RoleAssignment from '@/features/User/RoleAssignment/RoleAssignment';

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

export const getStaticProps: GetStaticProps = makeStaticProps(["common"]);


