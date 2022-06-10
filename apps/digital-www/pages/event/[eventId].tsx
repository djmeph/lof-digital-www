import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import { EventsSingleTimeComponent } from '@lof-digital-www/www-events';

export function Event() {
  const router = useRouter();
  const { eventId } = router.query;

  return (
    <Container fluid className="px-0">
      <EventsSingleTimeComponent eventId={eventId} />
    </Container>
  );
}

export default Event;
