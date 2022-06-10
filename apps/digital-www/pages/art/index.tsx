import { Container } from 'react-bootstrap';

import { Banner } from '@lof-digital-www/shared';
import { ArtComponent } from '@lof-digital-www/www-events';

export function Art() {
  return (
    <Container fluid className="px-0">
      <Banner title="Art Hub" />
      <ArtComponent />
    </Container>
  );
}

export default Art;
