import { Dispatch, SetStateAction } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import { Link } from '@lof-digital-www/shared';

import { WwwEvent } from '../../interfaces/www-events.interface';
import CategoriesSelected from '../categories-selected/categories-selected';
import EventTimeComponent from '../event-time/event-time';
import FavoriteComponent from '../favorite/favorite';
import HeartCountComponent from '../heart-count/heart-count';

import styles from './event.module.scss';

/* eslint-disable-next-line */
export interface EventProps {
  event: WwwEvent;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function EventComponent({ event, setExpanded }: EventProps) {
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
            <FavoriteComponent eventId={event.event_id} />
            <CategoriesSelected event={event} />
          </div>
          <div className={styles['clear']}>
            <ListGroup>
              <ListGroupItem active>Event times:</ListGroupItem>
              {event.event_times.map((eventTime) => (
                <ListGroupItem key={eventTime.event_time_id}>
                  <EventTimeComponent eventTime={eventTime} />
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventComponent;
