import { FC } from 'react';
import { useQuery } from 'react-query';

import { EventsFeedContext } from '../../context/EventsFeedContext';
import { MainFeed } from '../../interfaces/www-events.interface';

export const DigitalWwwFeedProvider: FC = ({ children }) => {
  const events = useQuery<MainFeed, Error>(
    'jsonFeed',
    async (): Promise<MainFeed> => {
      const res = await Promise.all([
        fetch('/api/feed'),
        fetch('/digital-www.json'),
      ]);
      const json = await Promise.all(res.map((response) => response.json()));
      return {
        ...json[0],
        ...json[1],
      };
    }
  );

  if (events.error)
    return <div>An error has occured: {events.error.message}</div>;

  if (events.isLoading || !events.data)
    return <h1 className="title">Reticulating Splines ...</h1>;

  return (
    <EventsFeedContext.Provider value={events.data}>
      {children}
    </EventsFeedContext.Provider>
  );
};

export default DigitalWwwFeedProvider;
