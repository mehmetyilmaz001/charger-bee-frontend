import dayjs from 'dayjs';
import React from 'react';

import type { dateFormatList } from '@/utils/constants';

interface DateCellProps {
  date: string;
  format: (typeof dateFormatList)[number];
}

const DateCell: React.FC<DateCellProps> = ({ date, format }) => {
  return <div className="date-cell">{dayjs(date).format(format)}</div>;
};

export default DateCell;
