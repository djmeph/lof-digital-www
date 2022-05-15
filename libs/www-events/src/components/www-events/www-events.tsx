import styles from './www-events.module.css';
import EventComponent from '../event/event';
import { useEventsFeedContext } from '../../context/EventsFeedContext';

/* eslint-disable-next-line */
export interface WwwEventsProps {}

export function WwwEventsComponent(props: WwwEventsProps) {
  const data = useEventsFeedContext();

  return (
    <div className={styles['container']}>
      {data.coalesce.map((event) =>
        <EventComponent event={event} key={event.event_id} />
      )}
    </div>
  );
}

export default WwwEventsComponent;
