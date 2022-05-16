import { WwwEventsComponent } from '@lof-digital-www/www-events';
import { Container } from 'react-bootstrap';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface EventsProps {}

export function Events(props: EventsProps) {
  return (
    <Container>
      <div className={styles.page}>
        <WwwEventsComponent />
      </div>
    </Container>
  );
}

export default Events;
