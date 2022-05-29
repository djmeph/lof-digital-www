import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import {
  getFavorites,
  getEventsByDay,
  DateSelectorComponent,
} from '@lof-digital-www/calendar';
import { Prompt, useFavoritesContext } from '@lof-digital-www/shared';
import {
  DayOfWeek,
  SingleEventTime,
  useEventsFeedContext,
} from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function Favorites() {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);
  const matchingEvents = getEventsByDay(savedEvents, day as DayOfWeek);
  return (
    <Container>
      <div className={styles['container']}>
        <div className="mb-3">
          <Prompt title="Favorites" />
        </div>
        <DateSelectorComponent day={day as DayOfWeek} route="favorites" />
        {matchingEvents.map((event) => (
          <SingleEventTime event={event} key={event.event_id} />
        ))}
      </div>
    </Container>
  );
}

export default Favorites;
