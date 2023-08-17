import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
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