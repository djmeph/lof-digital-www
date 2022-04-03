import { ListGroupItem } from "react-bootstrap";
import { EventTime } from "../interfaces/coalesce";

export function EventTimeComponent({ eventTime }: { eventTime: EventTime }) {
  if (eventTime.all_day) return (
    <ListGroupItem>
      {eventTime.day_of_week} All Day
    </ListGroupItem>
  )

  const startDate = new Intl.DateTimeFormat('en-US', {
    hour12: true,
    timeStyle: 'short'
  }).format(new Date(eventTime.starting));

  const endDate = new Intl.DateTimeFormat('en-US', {
    hour12: true,
    timeStyle: 'short'
  }).format(new Date(eventTime.ending));

  return (
    <ListGroupItem>
      {eventTime.day_of_week} Starting: {startDate} Ending: {endDate}
    </ListGroupItem>
  )
}

export default EventTimeComponent;
