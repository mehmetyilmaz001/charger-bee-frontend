import { SendOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

interface EmailCellProps {
  email: string;
}

const EmailCell: React.FC<EmailCellProps> = ({ email }) => {
  return (
    <Space>
      <a href={`mailto: ${email}`}>
        <SendOutlined /> {email}
      </a>
    </Space>
  );
};

export default EmailCell;
