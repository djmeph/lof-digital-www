import { WwwEventsComponent } from '@lof-digital-www/www-events';
import styles from './index.module.scss';
import { Container } from 'react-bootstrap';

export function Index() {
  return (
    <Container>
      <div className={styles.page}>
        <h1 className="page-title">
          Welcome to digital-www!
        </h1>
        <WwwEventsComponent />
      </div>
    </Container>
  );
}

export default Index;
