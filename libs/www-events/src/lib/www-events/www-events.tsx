import { useQuery } from 'react-query';
import styles from './www-events.module.css';
import Event from '../event/event';
import { DataCoalesce } from '../www-events.interface';

/* eslint-disable-next-line */
export interface WwwEventsProps {}

export function WwwEventsComponent(props: WwwEventsProps) {
  const { isLoading, error, data } = useQuery<boolean, Error, DataCoalesce>('jsonFeed', async () => {
    const res = await fetch('/api/digital-www');
    return res.json();
  });

  if (isLoading) return (
    <div>Loading ...</div>
  );

  if (error) return (
    <div>An error has occured: {error.message}</div>
  )

  return (
    <div className={styles['container']}>
      {data?.coalesce.map((event) =>
        <Event event={event} key={event.event_id} />
      )}
    </div>
  );
}

export default WwwEventsComponent;
