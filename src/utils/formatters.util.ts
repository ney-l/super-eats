import { IMenuItem } from '../types';

export const getTotalUSD = (items: IMenuItem[]) =>
  items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((acc, current) => acc + current, 0)
    .toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
    });

export const getFormattedDateTime = () => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const date = new Date();
  const hours = date.getHours();
  const ampm = hours >= 12 ? 'pm' : 'am';

  return `${date.getDate()} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()} at ${hours}:${date.getMinutes()} ${ampm}`;
};
