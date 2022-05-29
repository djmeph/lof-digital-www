import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import { EventsSingleTimeComponent } from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function Event() {
  const router = useRouter();
  const { eventId } = router.query;

  return (
    <div className={styles['container']}>
      <Container>
        <EventsSingleTimeComponent eventId={eventId} />
      </Container>
    </div>
  );
}

export default Event;
