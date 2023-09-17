import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import { ArrowRightOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

interface IActionsCell {
    onDetail?: () => void;
    onDelete?: () => void;
    onUpdate?: () => void;
}

const buttonProps: BaseButtonProps = {
    size: "small"
}

const ActionsCell: React.FC<IActionsCell> = ({onDetail, onDelete, onUpdate}) => {
    const { t } = useTranslation(["common"]);
    return (
        <Space className="actions-cell">
            {onDetail && <Tooltip title={t("detail")}><Button {...buttonProps} onClick={onDetail}><ArrowRightOutlined /></Button></Tooltip>}
            {onDelete && <Tooltip title={t("delete")}><Button {...buttonProps} onClick={onDetail} danger><DeleteOutlined /></Button></Tooltip>}
            {onUpdate && <Tooltip title={t("edit")}><Button {...buttonProps} onClick={onDetail}><EditOutlined /></Button></Tooltip>}
        </Space>
    );
};

export default ActionsCell;