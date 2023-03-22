import { FC, ReactNode } from 'react';
import { useQuery } from 'react-query';

import { EventsFeedContext } from '../../context/EventsFeedContext';
import { MainFeed } from '../../interfaces/www-events.interface';

type Props = {
  children?: ReactNode;
};

export const DigitalWwwFeedProvider: FC<Props> = ({ children }) => {
  const { data, error, isLoading } = useQuery<MainFeed, Error>(
    'jsonFeed',
    async (): Promise<MainFeed> => {
      const res = await fetch('/digital-www.json');
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
