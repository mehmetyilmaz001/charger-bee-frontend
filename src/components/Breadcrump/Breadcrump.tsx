import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { capitalize } from '@/utils/helpers';
import useItems from './useItems';

interface BreadcrumpProps {

}

const Breadcrump: React.FC<BreadcrumpProps> = () => {
    const items = useItems();
    return (
        <AntBreadcrumb items={items} />
    );
};

export default Breadcrump;