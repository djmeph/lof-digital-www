import { useQuery } from "react-query";
import { DataCoalesce } from "../../interfaces/www-events.interface";
import { EventsFeedContext } from '../../context/EventsFeedContext';
import { FC } from "react";

export const DigitalWwwFeedProvider: FC = ({ children }) => {
  const { data, error, isLoading } = useQuery<DataCoalesce, Error>(
    'jsonFeed',
    async (): Promise<DataCoalesce> => {
      const res = await fetch('/api/digital-www');
      return res.json();
    }
  );

  if (error) return (
    <div>An error has occured: {error.message}</div>
  )

  if (isLoading || !data) return (
    <div>Loading ...</div>
  );

  return (
    <EventsFeedContext.Provider value={data}>{children}</EventsFeedContext.Provider>
  );
}

export default DigitalWwwFeedProvider;
