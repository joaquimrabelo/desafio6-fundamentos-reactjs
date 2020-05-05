import { format, zonedTimeToUtc } from 'date-fns-tz';

const formatDate = (value: Date): string => {
  const utcDate = zonedTimeToUtc(value, 'America/Sao_Paulo');
  const data = format(utcDate, 'dd/MM/yyyy');
  return data;
};

export default formatDate;
