import { createContext, useContext } from 'react';

import { MainFeed } from '../interfaces/www-events.interface';

export const EventsFeedContext = createContext<MainFeed>({
  coalesce: [],
  art: [],
  vehicles: [],
  camps: [],
});

export const useEventsFeedContext = () => useContext(EventsFeedContext);
