import DigitalWwwComponent from '../components/DigitalWWW';
import styles from './index.module.scss';
import { Container } from 'react-bootstrap';

export function Index() {
  return (
    <Container>
      <div className={styles.page}>
        <h1 className="page-title">
          Welcome to digital-www!
        </h1>
        <DigitalWwwComponent />
      </div>
    </Container>
  );
}

export default Index;
