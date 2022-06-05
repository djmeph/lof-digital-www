import { FC } from 'react';
import { useQuery } from 'react-query';

import { EventsFeedContext } from '../../context/EventsFeedContext';
import {
  ArtFeed,
  CampsFeed,
  DataCoalesce,
  MainFeed,
  VehiclesFeed,
} from '../../interfaces/www-events.interface';

export const DigitalWwwFeedProvider: FC = ({ children }) => {
  const { data, error, isLoading } = useQuery<MainFeed, Error>(
    'jsonFeed',
    async (): Promise<MainFeed> => {
      const [resEvents, resCamps, resVehicles, resArt] = await Promise.all([
        fetch('/api/digital-www'),
        fetch('/api/camps'),
        fetch('/api/vehicles'),
        fetch('/api/art'),
      ]);

      const events: DataCoalesce = await resEvents.json();
      const camps: CampsFeed = await resCamps.json();
      const vehicles: VehiclesFeed = await resVehicles.json();
      const art: ArtFeed = await resArt.json();

      return {
        coalesce: events.coalesce,
        camps: camps.camps,
        vehicles: vehicles.vehicles,
        art: art.art,
      };
    }
  );

  if (error) return <div>An error has occured: {error.message}</div>;

  if (isLoading || !data) return <div>Loading ...</div>;

  return (
    <EventsFeedContext.Provider value={data}>
      {children}
    </EventsFeedContext.Provider>
  );
};

export default DigitalWwwFeedProvider;
