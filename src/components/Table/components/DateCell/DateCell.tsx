import React from 'react';
import dayjs from 'dayjs';
import { dateFormatList } from '@/utils/constants';

interface DateCellProps {
    date: string;
    format: typeof dateFormatList[number];
}

const DateCell: React.FC<DateCellProps> = ({date, format}) => {
    return (
        <div className="date-cell">
            {dayjs(date).format(format)}
        </div>
    );
};

export default DateCell;