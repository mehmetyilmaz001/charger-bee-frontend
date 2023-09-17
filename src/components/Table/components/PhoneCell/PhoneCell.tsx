import { PhoneOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

interface PhoneCellProps {
  phone: string;
}

const PhoneCell: React.FC<PhoneCellProps> = ({ phone }) => {
  return (
    <Space>
      <a href={`tel: ${phone}`}>
        <PhoneOutlined /> {phone}
      </a>
    </Space>
  );
};

export default PhoneCell;
