import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import useItems from './useItems';

interface BreadcrumbProps {

}

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
    const items = useItems();
    return (
        <AntBreadcrumb items={items} />
    );
};

export default Breadcrumb;