import { IMenuItem } from '../types';

export const getTotalUSD = (items: IMenuItem[]) =>
  items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((acc, current) => acc + current, 0)
    .toLocaleString('en', {
      style: 'currency',
      currency: 'USD',
    });
