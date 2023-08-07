import Table, { TableProps } from '@/components/Table/Table';
import React from 'react';

interface ListUsersProps {
    
}

const columns: TableProps<any>["columns"] = [
    {
        title: "Name"
    }
]

const ListUsers: React.FC<ListUsersProps> = () => {
    return (
        <div>
            <Table columns={columns} data={[] as any} />
        </div>
    );
};

export default ListUsers;