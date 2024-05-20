import { FC } from 'react';
import { useQuery } from 'react-query';

import { EventsFeedContext } from '../../context/EventsFeedContext';
import { DataCoalesce, MainFeed } from '../../interfaces/www-events.interface';

export const DigitalWwwFeedProvider: FC = ({ children }) => {
  const events = useQuery<DataCoalesce, Error>(
    'jsonFeed',
    async (): Promise<DataCoalesce> => {
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

  const staticFeed = useQuery<MainFeed, Error>(
    'staticFeed',
    async (): Promise<MainFeed> => {
      const res = await fetch('/api/feed');
      return res.json();
    }
  );

  if (events.error)
    return <div>An error has occured: {events.error.message}</div>;

  if (staticFeed.error)
    return <div>An error has occured: {staticFeed.error.message}</div>;

  if (
    events.isLoading ||
    !events.data ||
    staticFeed.isLoading ||
    !staticFeed.data
  )
    return <h1 className="title">Reticulating Splines ...</h1>;

  return (
    <EventsFeedContext.Provider value={{ ...events.data, ...staticFeed.data }}>
      {children}
    </EventsFeedContext.Provider>
  );
};

export default DigitalWwwFeedProvider;
