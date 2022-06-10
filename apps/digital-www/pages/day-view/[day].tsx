import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import {
  DateSelectorComponent,
  DayViewComponent,
} from '@lof-digital-www/calendar';
import { datesOfWeek, DayOfWeek } from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function DayViewPage() {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');
  const currentDate = `${datesOfWeek[day]}T00:00:00`;

  return (
    <Container fluid className="px-0">
      <DateSelectorComponent day={day as DayOfWeek} route="day-view" />
      <DayViewComponent currentDate={currentDate} />
    </Container>
  );
}

export default DayViewPage;
