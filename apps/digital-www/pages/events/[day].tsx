import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { Container } from 'react-bootstrap';

import { DayOfWeek, EventsDayComponent } from '@lof-digital-www/www-events';

interface EventsProps {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function Events({ setExpanded }: EventsProps) {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');

  return (
    <Container fluid className="px-0">
      <EventsDayComponent day={day as DayOfWeek} setExpanded={setExpanded} />
    </Container>
  );
}

export default Events;
