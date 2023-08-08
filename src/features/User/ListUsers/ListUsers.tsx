import Table, { TableProps } from '@/components/Table/Table';
import React from 'react';
import { Role, User } from '../types';
import { Tag } from 'antd';
import { DateCell, ActionsCell, TableHeader, ProfileCell, EmailCell, PhoneCell } from '@/components/Table/components';

interface ListUsersProps {

}

const columns: TableProps<User>["columns"] = [
    {
        title: "Name",
        dataIndex: "fullName",
        render: (_, record) => <ProfileCell name={record.fullName} profilePicUrl={record.profilePicUrl} />
    },
    {
        title: "Email",
        dataIndex: "email",
        render: (val: string) => <EmailCell email={val} />
    },
    {
        title: "Phone",
        dataIndex: "phone",
        render: (val: string) => <PhoneCell phone={val} />
    },
    {
        title: "Created Date",
        dataIndex: "createdDate",
        render: (val: string) => <DateCell date={val} format="DD/MM/YYYY [at] h:mm A" />
    },
    {
        title: "Role",
        dataIndex: "role",
        render: (val: Role[]) => val.map(role => <Tag key={role.id}>{role.name}</Tag>)
    },
    {
        dataIndex: "id",
        render: (val: string) => <ActionsCell onDetail={() => alert(val)} onDelete={() => alert(val)} />
    }
];

const data: User[] = [
    {
        id: "01",
        name: "Mehmet",
        surname: "Yılmaz",
        fullName: "Mehmet Yılmaz",
        createdDate: "2023-08-07 07:07:07",
        email: "mehmetyilmaz001@gmail.com",
        phone: "+905327408401",
        profilePicUrl: "",
        role: [
            { id: "01", name: "user" },
            { id: "02", name: "admin" },
        ]
    },
    {
        id: "02",
        name: "Semih",
        surname: "Yavuz",
        fullName: "Semih Yavuz",
        createdDate: "2023-08-08 08:08:08",
        email: "semihyavuz@gmail.com",
        phone: "+905327408401",
        profilePicUrl: "",
        role: [
            { id: "02", name: "admin" },
        ]
    }
];

const ListUsers: React.FC<ListUsersProps> = () => {
    return (
        <div>
            <Table columns={columns} data={data} rowKey="id" />
        </div>
    );
};

export default ListUsers;