import { Container } from 'react-bootstrap';

import { Banner } from '@lof-digital-www/shared';
import { RadioComponent } from '@lof-digital-www/www-events';

export function Art() {
  return (
    <Container fluid className="px-0">
      <Banner title="Radio SGC 103.3 FM" />
      <RadioComponent />
    </Container>
  );
}

export default Art;
