import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import { DayOfWeek, EventsDayComponent } from '@lof-digital-www/www-events';

export function Events() {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');

  return (
    <Container fluid className="px-0">
      <EventsDayComponent day={day as DayOfWeek} />
    </Container>
  );
}

export default Events;
