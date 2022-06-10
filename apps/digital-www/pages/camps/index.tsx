import { Container } from 'react-bootstrap';

import { Banner } from '@lof-digital-www/shared';
import { CampsComponent } from '@lof-digital-www/www-events';

export function Camps() {
  return (
    <Container fluid className="px-0">
      <Banner title="Theme Camps" />
      <CampsComponent />
    </Container>
  );
}

export default Camps;
