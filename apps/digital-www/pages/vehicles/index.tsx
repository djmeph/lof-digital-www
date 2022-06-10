import { Container } from 'react-bootstrap';

import { Banner } from '@lof-digital-www/shared';
import { VehiclesComponent } from '@lof-digital-www/www-events';

export function Vehicles() {
  return (
    <Container fluid className="px-0">
      <Banner title="Mutant Vehicles" />
      <VehiclesComponent />
    </Container>
  );
}

export default Vehicles;
