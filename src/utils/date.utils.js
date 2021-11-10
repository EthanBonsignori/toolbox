import { formatDuration, intervalToDuration } from 'date-fns';

export const humanReadableDateDiff = date => {
  const eventDate = new Date(date);
  const todayDate = new Date();
  const duration = intervalToDuration({ start: eventDate, end: todayDate });
  const delimiter = ' & ';
  const formatted = formatDuration(duration, {
    format: ['years', 'months', 'weeks', 'days', 'hours', 'minutes'],
    delimiter,
  }).split(delimiter);
  return [formatted[0], formatted[1]];
};
