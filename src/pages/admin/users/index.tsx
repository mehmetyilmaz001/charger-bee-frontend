import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import { GetStaticProps } from 'next/types';
import { makeStaticProps } from '@/utils/locale';
import ListUsers from '@/features/User/ListUsers/ListUsers';
import { useTranslation } from 'next-i18next';

const UsersPage = () => {
    const { t } = useTranslation();
    return (
        <AdminLayout>
            {t("common.users")}
            <ListUsers />
        </AdminLayout>
    );
};


export default UsersPage;

export const getStaticProps: GetStaticProps = makeStaticProps(["common", "user"]);


