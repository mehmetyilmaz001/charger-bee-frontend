import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import { GetStaticProps } from 'next/types';
import { makeStaticProps } from '@/utils/locale';
import ListUsers from '@/features/User/ListUsers/ListUsers';

const UsersPage = () => {
    return (
        <AdminLayout>
            <ListUsers />
        </AdminLayout>
    );
};


export default UsersPage;

export const getStaticProps: GetStaticProps = makeStaticProps(["common", "user"]);


