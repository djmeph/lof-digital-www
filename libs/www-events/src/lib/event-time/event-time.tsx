import { ListGroupItem } from 'react-bootstrap';
import { EventTime } from '../www-events.interface';
import styles from './event-time.module.scss';

/* eslint-disable-next-line */
export interface EventTimeProps {
  eventTime: EventTime
}

export function EventTimeComponent(props: EventTimeProps) {
  if (props.eventTime.all_day) return (
    <ListGroupItem>
      {props.eventTime.day_of_week} All Day
    </ListGroupItem>
  )

  const startDate = new Intl.DateTimeFormat('en-US', {
    hour12: true,
    timeStyle: 'short'
  }).format(new Date(props.eventTime.starting));

  const endDate = new Intl.DateTimeFormat('en-US', {
    hour12: true,
    timeStyle: 'short'
  }).format(new Date(props.eventTime.ending));

  return (
    <div className={styles['container']}>
      <ListGroupItem>
        {props.eventTime.day_of_week} Starting: {startDate} Ending: {endDate}
      </ListGroupItem>
    </div>
  );
}

export default EventTimeComponent;
