import { useEventsFeedContext } from '../../context/EventsFeedContext';
import EventComponent from '../event/event';

import styles from './www-events.module.css';

export function WwwEventsComponent() {
  const data = useEventsFeedContext();

  return (
    <div className={styles['container']}>
      {data.coalesce.map((event) => (
        <EventComponent event={event} key={event.event_id} />
      ))}
    </div>
  );
}

export default WwwEventsComponent;
