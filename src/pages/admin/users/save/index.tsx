import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import { GetStaticProps } from 'next/types';
import { makeStaticProps } from '@/utils/locale';
import SaveUserForm from '@/features/User/SaveUser/SaveUser';
import Head from 'next/head';

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

export const getStaticProps: GetStaticProps = makeStaticProps(["common"]);


