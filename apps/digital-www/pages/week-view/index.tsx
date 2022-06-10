import { Container } from 'react-bootstrap';

import { WeekViewComponent } from '@lof-digital-www/calendar';

export function WeekView() {
  return (
    <Container fluid className="px-0">
      <WeekViewComponent />
    </Container>
  );
}

export default WeekView;
