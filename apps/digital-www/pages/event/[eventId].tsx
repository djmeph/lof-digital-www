import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { Container } from 'react-bootstrap';

import { EventsSingleTimeComponent } from '@lof-digital-www/www-events';

interface EventProps {
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function Event({ setExpanded }: EventProps) {
  const router = useRouter();
  const { eventId } = router.query;

  return (
    <Container fluid className="px-0">
      <EventsSingleTimeComponent eventId={eventId} setExpanded={setExpanded} />
    </Container>
  );
}

export default Event;
