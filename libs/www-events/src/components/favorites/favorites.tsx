import {
  DateSelectorComponent,
  getEventsByDay,
  getFavorites,
} from '@lof-digital-www/calendar';
import { Banner, useFavoritesContext } from '@lof-digital-www/shared';

import { useEventsFeedContext } from '../../context/EventsFeedContext';
import { DayOfWeek } from '../../interfaces/www-events.enum';
import SingleEventTime from '../single-event-time/single-event-time';

import styles from './favorites.module.scss';

export interface FavoritesProps {
  day: DayOfWeek;
}

export function FavoritesComponent({ day }: FavoritesProps) {
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);
  const matchingEvents = getEventsByDay(savedEvents, day);

  return (
    <div className={styles['container']}>
      <div className="mb-3">
        <Banner title="Favorites" />
      </div>
      <DateSelectorComponent day={day} route="favorites" />
      {matchingEvents.map((event) => (
        <SingleEventTime event={event} key={event.event_id} />
      ))}
    </div>
  );
}

export default FavoritesComponent;
