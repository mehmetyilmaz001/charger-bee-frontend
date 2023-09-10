import Table, { TableProps } from '@/components/Table/Table';
import React from 'react';
import { Button, Tag } from 'antd';
import PageHeader from '@/components/PageHeader/PageHeader';
import { UserAddOutlined } from "@ant-design/icons"
import { useListUsers } from './ListUsers.hook';

const pageTitle = "Users";

interface ListUsersProps {

}

const ListUsers: React.FC<ListUsersProps> = () => {
    const { router, columns, data  } = useListUsers();
    return (
        <>
            <main>
                <PageHeader 
                    title={pageTitle} 
                    showBreadcrump 
                    actions={[<Button type="primary" key="create-user" onClick={() => router.push("/admin/users/save")}><UserAddOutlined /> Create User</Button>]} />
                <Table columns={columns} data={data} rowKey="id" />
            </main>
        </>
    );
};

export default ListUsers;