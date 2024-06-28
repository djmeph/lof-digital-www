import { createContext, useContext } from 'react';

import { MainFeed } from '../interfaces/www-events.interface';

export const EventsFeedContext = createContext<MainFeed>({
  coalesce: [],
  art: [],
  vehicles: [],
  radio: [],
  camps: [],
});

export const useEventsFeedContext = () => useContext(EventsFeedContext);

export const tidyAlphaSort = (a: any, b: any, propName: string) => {
  const sortA = a[propName]
    .trim()
    .replace(/^[Tt]he ?/i, '')
    .toUpperCase();
  const sortB = b[propName]
    .trim()
    .replace(/^[Tt]he ?/i, '')
    .toUpperCase();

  if (sortA < sortB) return -1;
  if (sortA > sortB) return 1;
  return 0;
};
