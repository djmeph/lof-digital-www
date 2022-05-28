import { createContext, useContext } from 'react';

import { DataCoalesce } from '../interfaces/www-events.interface';

export const EventsFeedContext = createContext<DataCoalesce>({
  coalesce: [],
});

export const useEventsFeedContext = () => useContext(EventsFeedContext);
