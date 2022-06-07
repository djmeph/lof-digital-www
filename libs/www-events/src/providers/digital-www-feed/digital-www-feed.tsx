import { FC } from 'react';
import { useQuery } from 'react-query';

import { EventsFeedContext } from '../../context/EventsFeedContext';
import { MainFeed } from '../../interfaces/www-events.interface';

export const DigitalWwwFeedProvider: FC = ({ children }) => {
  const { data, error, isLoading } = useQuery<MainFeed, Error>(
    'jsonFeed',
    async (): Promise<MainFeed> => {
      const res = await fetch('/api/digital-www');
      return res.json();
    }
  );

  if (error) return <div>An error has occured: {error.message}</div>;

  if (isLoading || !data)
    return <h1 className="title">Reticulating Splines ...</h1>;

  return (
    <EventsFeedContext.Provider value={data}>
      {children}
    </EventsFeedContext.Provider>
  );
};

export default DigitalWwwFeedProvider;
