import { DateSelectorComponent, getEventsByDay } from '@lof-digital-www/calendar';
import { DayOfWeek, SingleEventTime, useEventsFeedContext } from '@lof-digital-www/www-events';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface EventsProps {}

export function Events(props: EventsProps) {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');
  const data = useEventsFeedContext();
  const matchingEvents = getEventsByDay(data.coalesce, day as DayOfWeek);

  return (
    <Container>
      <div className={styles.page}>
        <DateSelectorComponent day={day as DayOfWeek} route='events' />
        {matchingEvents.map((event) =>
          <SingleEventTime event={event} key={event.event_id} />
        )}
      </div>
    </Container>
  );
}

export default Events;
