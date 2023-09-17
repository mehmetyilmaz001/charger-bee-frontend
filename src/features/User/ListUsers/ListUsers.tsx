import { UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';
import React from 'react';

import PageHeader from '@/components/PageHeader/PageHeader';
import Table from '@/components/Table/Table';

import { useListUsers } from './ListUsers.hook';

interface ListUsersProps {}

const ListUsers: React.FC<ListUsersProps> = () => {
  const { router, columns, data } = useListUsers();
  const { t } = useTranslation(['user']);
  return (
    <>
      <main>
        <PageHeader
          title={t('users')}
          showBreadcrump
          actions={[
            <Button
              type="primary"
              key="create-user"
              onClick={() => router.push('/admin/users/save')}
            >
              <UserAddOutlined /> {t('new_user')}
            </Button>,
          ]}
        />
        <Table columns={columns} data={data} rowKey="id" responsive />
      </main>
    </>
  );
};

export default ListUsers;
