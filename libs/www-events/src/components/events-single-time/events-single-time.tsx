import { Dispatch, SetStateAction } from 'react';

import { getEventById } from '@lof-digital-www/calendar';

import { useEventsFeedContext } from '../../context/EventsFeedContext';
import EventComponent from '../event/event';

import styles from './events-single-time.module.scss';

export interface EventsSingleTimeProps {
  eventId: string | string[];
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function EventsSingleTimeComponent({
  eventId,
  setExpanded,
}: EventsSingleTimeProps) {
  const data = useEventsFeedContext();
  const events = getEventById(data.coalesce, eventId);

  return (
    <div className={styles['container']}>
      {events.map((event) => (
        <EventComponent
          event={event}
          key={event.event_id}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
}

export default EventsSingleTimeComponent;
