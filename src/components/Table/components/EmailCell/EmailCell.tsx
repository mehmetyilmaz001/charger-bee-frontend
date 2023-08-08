import React from 'react';
import { Space } from 'antd';
import { SendOutlined } from '@ant-design/icons';

interface EmailCellProps {
    email: string
}

const EmailCell: React.FC<EmailCellProps> = ({email}) => {
    return (
        <Space>
            <a href={`mailto: ${email}`}><SendOutlined /> {email}</a>
        </Space>
    );
};

export default EmailCell;