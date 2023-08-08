import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import { Button } from 'antd';
import { GetStaticProps } from 'next/types';
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

export const getStaticProps: GetStaticProps = makeStaticProps(["common"]);


