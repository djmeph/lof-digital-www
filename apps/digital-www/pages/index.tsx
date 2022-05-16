import styles from './index.module.scss';
import { Container } from 'react-bootstrap';
import { HomePage } from '@lof-digital-www/home-page';

export function Index() {
  return (
    <Container>
      <div className={styles.page}>
        <HomePage />
      </div>
    </Container>
  );
}

export default Index;
