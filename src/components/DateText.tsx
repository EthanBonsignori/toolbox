import { addWeeks, format, nextDay } from 'date-fns';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { DATE_FORMAT } from '../constants/date.constants';
import { humanReadableDateDiff } from '../utils/date.utils';

interface DateTextProps {
  date: Date;
  weekday: Day;
  futureDate: Boolean;
}

const DateText: FC<DateTextProps> = ({ date, weekday }): ReactElement => {
  const [nextEventDate, setNextEventDate] = useState(new Date());
  const [formattedEventDate, setFormattedEventDate] = useState('');
  const [timeDelimiters, setTimeDelimiters] = useState(['', '']);

  useEffect(() => {
    const nextEventDay = nextDay(new Date(), weekday);
    setNextEventDate(nextEventDay);
  }, []);

  useEffect(() => {
    setTimeDelimiters(humanReadableDateDiff(nextEventDate));
    const nextEventDateWeeks = addWeeks(nextEventDate, 1);
    console.log('🚀 ~ useEffect ~ nextEventDateWeeks', nextEventDateWeeks);

    setFormattedEventDate(format(nextEventDateWeeks, DATE_FORMAT));
  }, [nextEventDate]);

  return (
    <div className="flex flex-col text-center leading-3">
      <span className="font-display">{formattedEventDate} 18th</span>
      <span className="font-body text-xs italic">
        <span className="font-body font-bold">{timeDelimiters[0]}</span>
        &nbsp;&amp;&nbsp;
        <span className="font-body font-bold">{timeDelimiters[1]}</span>
        &nbsp;{nextEventDate > new Date() ? 'ago' : 'from now'}
      </span>
    </div>
  );
};

export default DateText;
