import { getEventById } from '@lof-digital-www/calendar';

import { useEventsFeedContext } from '../../context/EventsFeedContext';
import EventComponent from '../event/event';

import styles from './events-single-time.module.scss';

export interface EventsSingleTimeProps {
  eventId: string | string[];
}

export function EventsSingleTimeComponent({ eventId }: EventsSingleTimeProps) {
  const data = useEventsFeedContext();
  const events = getEventById(data.coalesce, eventId);

  return (
    <div className={styles['container']}>
      {events.map((event) => (
        <EventComponent event={event} key={event.event_id} />
      ))}
    </div>
  );
}

export default EventsSingleTimeComponent;
