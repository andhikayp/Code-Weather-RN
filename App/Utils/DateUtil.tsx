import moment from 'moment';

const formatTime = (timestamp: string) => {
  const date = moment.unix(timestamp);

  return date.format('HH:mm');
};

const formatDate = (timestamp: string) => {
  const date = moment.unix(timestamp);

  return {
    date: date.format('DD'),
    month: date.format('MMM'),
    day: date.format('ddd'),
  };
};

export default {
  formatTime,
  formatDate,
};
