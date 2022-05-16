import { EventTime } from '../../interfaces/www-events.interface';
import styles from './event-time.module.scss';

/* eslint-disable-next-line */
export interface EventTimeProps {
  eventTime: EventTime
}

export function EventTimeComponent(props: EventTimeProps) {
  if (props.eventTime.all_day) return (
    <span>
      {props.eventTime.day_of_week} All Day
    </span>
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
      <span>
        {props.eventTime.day_of_week} {startDate} - {endDate}
      </span>
    </div>
  );
}

export default EventTimeComponent;
