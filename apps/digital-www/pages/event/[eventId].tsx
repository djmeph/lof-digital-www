import { getEventById } from '@lof-digital-www/calendar';
import { EventComponent, useEventsFeedContext } from '@lof-digital-www/www-events';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface EventProps {}

export function Event(props: EventProps) {
  const router = useRouter();
  const { eventId } = router.query;
  const data = useEventsFeedContext();
  const events = getEventById(data.coalesce, eventId);

  return (
    <div className={styles['container']}>
      {events.map((event) =>
        <EventComponent event={event} key={event.event_id} />
      )}
    </div>
  );
}

export default Event;
