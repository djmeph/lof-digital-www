import { Container, Row } from 'react-bootstrap';

import { Banner } from '@lof-digital-www/shared';
// import {
//   ArtComponent,
//   CampsComponent,
//   VehiclesComponent,
// } from '@lof-digital-www/www-events';

export function HomePage() {
  return (
    <Container fluid className="px-0">
      <Banner title="Welcome to Lakes of Fire 2022!" />
    </Container>
  );
}

export default HomePage;
