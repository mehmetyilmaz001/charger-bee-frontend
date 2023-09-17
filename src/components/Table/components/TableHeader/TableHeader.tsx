import React from 'react';

interface TableHeaderProps {
  title: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ title }) => {
  return <span className="table-header">{title}</span>;
};

export default TableHeader;
