import React from 'react';
import { Space } from 'antd';
import { PhoneOutlined } from '@ant-design/icons' 

interface PhoneCellProps {
    phone: string;
}

const PhoneCell: React.FC<PhoneCellProps> = ({phone}) => {
    return (
        <Space>
            <a href={`tel: ${phone}`}><PhoneOutlined /> {phone}</a>
        </Space>
    );
};

export default PhoneCell;