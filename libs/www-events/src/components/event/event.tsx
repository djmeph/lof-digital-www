import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import EventTimeComponent from '../event-time/event-time';
import { WwwEvent } from '../../interfaces/www-events.interface';
import styles from './event.module.scss';
import { Link } from '@lof-digital-www/shared';
import HeartCount from '../heart-count/heart-count';
import Category from '../category/category';

/* eslint-disable-next-line */
export interface EventProps {
  event: WwwEvent
}

export function EventComponent(props: EventProps) {
  return (
    <div className={styles['container']}>
      <Card className="mb-3">
        <Link to={`/event/${props.event.event_id}`}><Card.Header className={styles['hover']}><h3>{props.event.title}</h3></Card.Header></Link>
        <Card.Body>
          <Card.Text>
            {props.event.event_description}
          </Card.Text>
          <Card.Text>
            Location: {props.event.hosting_location}
            <HeartCount heartCount={props.event.heart_count} />
          </Card.Text>
          <Card.Text>
            <Category text='Alcohol' booleanValue={props.event.alcohol} />
            <Category text='Red light' booleanValue={props.event.red_light} />
            <Category text='Fire art' booleanValue={props.event.fire_art} />
            <Category text='Spectale' booleanValue={props.event.spectacle} />
            <Category text='Crafting' booleanValue={props.event.crafting} />
            <Category text='Food' booleanValue={props.event.food} />
            <Category text='Sober' booleanValue={props.event.sober} />
          </Card.Text>
          <ListGroup>
            <ListGroupItem active>Event times:</ListGroupItem>
            {props.event.event_times.map((eventTime) =>
              <ListGroupItem>
                <EventTimeComponent key={eventTime.event_time_id} eventTime={eventTime} />
              </ListGroupItem>
            )}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EventComponent;
