import React from "react";
import { Table as AntdTable, Card, Space } from "antd";
import { TableProps as AntTableProps } from "antd/es/table";
import { ColumnType, GetRowKey, TableRowSelection } from "antd/es/table/interface";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { AnyObject } from "../_util/type";

export type TableProps<Type> = {
    columns: ColumnType<Type>[]
    data: AntTableProps<Type>["dataSource"];
    rowSelection?: TableRowSelection<Type>;
    size?: SizeType;
    caption?: React.ReactNode;
    footer?: AntTableProps<Type>["footer"];
    responsive?: boolean;
    rowKey?: string | GetRowKey<Type>
}

const Table = <T extends AnyObject = AnyObject>({ columns, data, rowSelection, size, caption, footer, responsive, rowKey }: TableProps<T>) => {

    const getRowKey = React.useMemo<GetRowKey<T>>(() => {
        if (typeof rowKey === 'function') {
            return rowKey;
        }

        return (record: T) => (record as any)?.[rowKey as string];
    }, [rowKey]);

    return (
        <div className="table-component">
            {responsive ?
                <div className="responsive-container">
                    {data?.map((record, index) =>
                        <Card key={getRowKey.toString()}>
                            <Space direction="vertical" align="start">
                                {columns?.map(col => {
                                    const dataIndex = col.dataIndex as string;

                                    return (
                                        <div key={col.dataIndex as string}>
                                            {col.title && <b>{col.title as string}:</b>} {col.render ? col.render(record[dataIndex], record, index) : record[dataIndex]}
                                        </div>)
                                })}
                            </Space>
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