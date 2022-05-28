import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import {
  DateSelectorComponent,
  getEventsByDay,
} from '@lof-digital-www/calendar';
import {
  DayOfWeek,
  FiltersComponent,
  SingleEventTime,
  useEventsFeedContext,
} from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function Events() {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');
  const data = useEventsFeedContext();
  const matchingEvents = getEventsByDay(data.coalesce, day as DayOfWeek);

  return (
    <Container>
      <div className={styles.page}>
        <FiltersComponent />
        <DateSelectorComponent day={day as DayOfWeek} route="events" />
        {matchingEvents.map((event) => (
          <SingleEventTime event={event} key={event.event_id} />
        ))}
      </div>
    </Container>
  );
}

export default Events;
