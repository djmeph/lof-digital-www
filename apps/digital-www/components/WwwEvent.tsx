import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { WwwEvent } from "../interfaces/coalesce";
import EventTimeComponent from "./EventTime";

export function WwwEventComponent({ event }: { event: WwwEvent }) {
  return (
    <Card className="mb-3">
      <Card.Header>{event.title}</Card.Header>
      <Card.Body>
        <Card.Text>
          {event.event_description}
        </Card.Text>
        <ListGroup className="mb-3">
          <ListGroupItem active>Details</ListGroupItem>
          <ListGroupItem>Location: {event.hosting_location}</ListGroupItem>
          <ListGroupItem>Recurrence: {event.event_recurrence}</ListGroupItem>
          <ListGroupItem>Heart count: {event.heart_count}</ListGroupItem>
          <ListGroupItem>Alcohol: {event.alcohol ? 'true' : 'false'}</ListGroupItem>
          <ListGroupItem>Red light: {event.red_light ? 'true' : 'false'}</ListGroupItem>
          <ListGroupItem>Fire art: {event.fire_art ? 'true' : 'false'}</ListGroupItem>
          <ListGroupItem>Spectale: {event.spectacle ? 'true' : 'false'}</ListGroupItem>
          <ListGroupItem>Crafting: {event.crafting ? 'true' : 'false'}</ListGroupItem>
          <ListGroupItem>Food: {event.food ? 'true' : 'false'}</ListGroupItem>
          <ListGroupItem>Sober: {event.sober ? 'true' : 'false'}</ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem active>Event times:</ListGroupItem>
          {event.event_times.map((eventTime) =>
            <EventTimeComponent key={eventTime.event_time_id} eventTime={eventTime} />
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default WwwEventComponent;
