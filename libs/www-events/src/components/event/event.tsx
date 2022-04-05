import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import EventTimeComponent from '../event-time/event-time';
import { WwwEvent } from '../../interfaces/www-events.interface';
import styles from './event.module.scss';

/* eslint-disable-next-line */
export interface EventProps {
  event: WwwEvent
}

export function EventComponent(props: EventProps) {
  return (
    <div className={styles['container']}>
      <Card className="mb-3">
        <Card.Header>{props.event.title}</Card.Header>
        <Card.Body>
          <Card.Text>
            {props.event.event_description}
          </Card.Text>
          <ListGroup className="mb-3">
            <ListGroupItem active>Details</ListGroupItem>
            <ListGroupItem>Location: {props.event.hosting_location}</ListGroupItem>
            <ListGroupItem>Recurrence: {props.event.event_recurrence}</ListGroupItem>
            <ListGroupItem>Heart count: {props.event.heart_count}</ListGroupItem>
            <ListGroupItem>Alcohol: {props.event.alcohol ? 'true' : 'false'}</ListGroupItem>
            <ListGroupItem>Red light: {props.event.red_light ? 'true' : 'false'}</ListGroupItem>
            <ListGroupItem>Fire art: {props.event.fire_art ? 'true' : 'false'}</ListGroupItem>
            <ListGroupItem>Spectale: {props.event.spectacle ? 'true' : 'false'}</ListGroupItem>
            <ListGroupItem>Crafting: {props.event.crafting ? 'true' : 'false'}</ListGroupItem>
            <ListGroupItem>Food: {props.event.food ? 'true' : 'false'}</ListGroupItem>
            <ListGroupItem>Sober: {props.event.sober ? 'true' : 'false'}</ListGroupItem>
          </ListGroup>
          <ListGroup>
            <ListGroupItem active>Event times:</ListGroupItem>
            {props.event.event_times.map((eventTime) =>
              <EventTimeComponent key={eventTime.event_time_id} eventTime={eventTime} />
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventComponent;
