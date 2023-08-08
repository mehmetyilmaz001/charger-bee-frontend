import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface IActionsCell {
    onDetail?: () => void;
    onDelete?: () => void;
    onUpdate?: () => void;
}

const buttonProps: BaseButtonProps = {
    size: "small"
}

const ActionsCell: React.FC<IActionsCell> = ({onDetail, onDelete, onUpdate}) => {
    return (
        <Space className="actions-cell">
            {onDetail && <Tooltip title="Detail"><Button {...buttonProps} onClick={onDetail}><ArrowRightOutlined /></Button></Tooltip>}
            {onDelete && <Tooltip title="Delete"><Button {...buttonProps} onClick={onDetail} danger><DeleteOutlined /></Button></Tooltip>}
            {onUpdate && <Tooltip title="Update"><Button {...buttonProps} onClick={onDetail}><EditOutlined /></Button></Tooltip>}
        </Space>
    );
};

export default ActionsCell;