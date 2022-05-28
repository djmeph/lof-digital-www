import { Container } from 'react-bootstrap';

import { WwwEventsComponent } from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function Events() {
  return (
    <Container>
      <div className={styles.page}>
        <WwwEventsComponent />
      </div>
    </Container>
  );
}

export default Events;
