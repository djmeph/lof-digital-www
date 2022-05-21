import styles from './index.module.scss';
import { Container } from 'react-bootstrap';
import { HomePage } from '@lof-digital-www/home-page';

export function Index() {
  return (
    <Container>
      <div className={"px-0 " + styles.page}>
        <HomePage />
      </div>
    </Container>
  );
}

export default Index;
