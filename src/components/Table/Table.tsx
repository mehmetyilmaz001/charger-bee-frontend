import React from "react";
import { Table as AntdTable, Card } from "antd";
import { ColumnsType, TableProps as AntTableProps } from "antd/es/table";
import { Type } from "typescript";
import { GetRowKey, TableRowSelection } from "antd/es/table/interface";
import { SizeType } from "antd/es/config-provider/SizeContext";

export type TableProps<T> = {
    columns: ColumnsType<Type>;
    data: AntTableProps<T>["dataSource"];
    rowSelection?: TableRowSelection<Type>;
    size?: SizeType;
    caption?: React.ReactNode;
    footer?: AntTableProps<T>["footer"];
    responsive?: boolean;
    rowKey?: string | GetRowKey<Type>
}

const Table: React.FC<TableProps<Type>> = ({ columns, data, rowSelection, size, caption, footer, responsive, rowKey }) => {

    const getRowKey = React.useMemo<GetRowKey<Type>>(() => {
        if (typeof rowKey === 'function') {
            return rowKey;
        }

        return (record: Type) => (record as any)?.[rowKey as string];
    }, [rowKey]);

    return (
        <div className="table-component">
            {responsive ?
                <div className="responsive-container">
                    {data?.map(i => <Card key={getRowKey.toString()}>
                        {Object.entries((key: string, val: string) => <div key={key}>{val}</div>)}
                    </Card>
                    )}
                </div>
                :
                <AntdTable
                    columns={columns}
                    dataSource={data}
                    rowSelection={rowSelection}
                    size={size}
                    caption={caption}
                    footer={footer}
                    rowKey={getRowKey}
                />
            }
        </div>
    );
};

export default Table;