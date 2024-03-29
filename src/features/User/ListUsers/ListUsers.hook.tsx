import type { TableProps } from 'antd';
import { Tag } from 'antd';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import {
  ActionsCell,
  DateCell,
  EmailCell,
  PhoneCell,
  ProfileCell,
} from '@/components/Table/components';

import type { Role, User } from '../types';

const data: User[] = [
  {
    id: '01',
    name: 'Mehmet',
    surname: 'Yılmaz',
    fullName: 'Mehmet Yılmaz',
    createdDate: '2023-08-07 07:07:07',
    email: 'mehmetyilmaz001@gmail.com',
    phone: '+905327408401',
    profilePicUrl: '',
    role: [
      { id: '01', name: 'user' },
      { id: '02', name: 'admin' },
    ],
  },
  {
    id: '02',
    name: 'Semih',
    surname: 'Yavuz',
    fullName: 'Semih Yavuz',
    createdDate: '2023-08-08 08:08:08',
    email: 'semihyavuz@gmail.com',
    phone: '+905327408401',
    profilePicUrl: '',
    role: [{ id: '02', name: 'admin' }],
  },
];

export const useListUsers = () => {
  const { t } = useTranslation(['user', 'common']);
  const router = useRouter();
  const columns: TableProps<User>['columns'] = [
    {
      title: t('full_name'),
      dataIndex: 'fullName',
      render: (_, record) => (
        <ProfileCell
          name={record.fullName}
          profilePicUrl={record.profilePicUrl}
        />
      ),
    },
    {
      title: t('email'),
      dataIndex: 'email',
      render: (val: string) => <EmailCell email={val} />,
    },
    {
      title: t('phone'),
      dataIndex: 'phone',
      render: (val: string) => <PhoneCell phone={val} />,
    },
    {
      title: t('common:created_date'),
      dataIndex: 'createdDate',
      render: (val: string) => (
        <DateCell date={val} format="DD/MM/YYYY [at] h:mm A" />
      ),
    },
    {
      title: t('role'),
      dataIndex: 'role',
      render: (val: Role[]) =>
        val.map((role) => <Tag key={role.id}>{role.name}</Tag>),
    },
    {
      dataIndex: 'id',
      render: (val: string) => (
        <ActionsCell
          onDetail={() =>
            router.push({ pathname: '/admin/users/save', query: { id: val } })
          }
          onDelete={() => alert(val)}
        />
      ),
    },
  ];

  return { columns, router, data };
};
