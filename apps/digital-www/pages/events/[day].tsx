import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

import {
  DateSelectorComponent,
  filterEvents,
  getEventsByDay,
} from '@lof-digital-www/calendar';
import {
  Prompt,
  TagFilterGroupComponent,
  useTagFilterContext,
} from '@lof-digital-www/shared';
import {
  DayOfWeek,
  SingleEventTime,
  useEventsFeedContext,
} from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function Events() {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');
  const data = useEventsFeedContext();
  const { tagFilterState, allDayFilterState } = useTagFilterContext();
  const matchingEvents = getEventsByDay(data.coalesce, day as DayOfWeek);
  const filteredEvents = filterEvents(
    matchingEvents,
    tagFilterState,
    allDayFilterState
  );

  return (
    <Container>
      <div className={styles.page}>
        <div className="mb-3">
          <Prompt title={`${day} Events`}>
            <TagFilterGroupComponent />
          </Prompt>
        </div>
        <DateSelectorComponent day={day as DayOfWeek} route="events" />
        {filteredEvents.map((event) => (
          <SingleEventTime event={event} key={event.event_id} />
        ))}
      </div>
    </Container>
  );
}

export default Events;
