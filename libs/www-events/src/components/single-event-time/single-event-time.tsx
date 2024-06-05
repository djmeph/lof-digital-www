import { Dispatch, SetStateAction } from 'react';
import { Card } from 'react-bootstrap';

import { Link } from '@lof-digital-www/shared';

import { WwwEventSingleTime } from '../../interfaces/www-events.interface';
import CategoriesSelected from '../categories-selected/categories-selected';
import EventTimeComponent from '../event-time/event-time';
import FavoriteComponent from '../favorite/favorite';
import HeartCountComponent from '../heart-count/heart-count';

import styles from './single-event-time.module.scss';

export interface SingleEventTimeProps {
  event: WwwEventSingleTime;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function SingleEventTime({ event, setExpanded }: SingleEventTimeProps) {
  return (
    <div className={styles['container']}>
      <Card className="mb-3">
        <Link to={`/event/${event.event_id}`} setExpanded={setExpanded}>
          <Card.Header className={styles['hover']}>
            <h3>{event.title}</h3>
          </Card.Header>
        </Link>
        <Card.Body>
          <Card.Text>{event.event_description}</Card.Text>
          <Card.Text>
            Location: {event.hosting_location}
            <HeartCountComponent heartCount={event.heart_count} />
          </Card.Text>
          <div className="mb-3">
            <EventTimeComponent eventTime={event.eventTime} />
          </div>
          <FavoriteComponent eventId={event.event_id} />
          <CategoriesSelected event={event} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default SingleEventTime;
