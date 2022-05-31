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

import { useEventsFeedContext } from '../../context/EventsFeedContext';
import { DayOfWeek } from '../../interfaces/www-events.enum';
import SingleEventTime from '../single-event-time/single-event-time';

import styles from './events-day.module.scss';

export interface EventsDayProps {
  day: DayOfWeek;
}

export function EventsDayComponent({ day }: EventsDayProps) {
  const data = useEventsFeedContext();
  const { tagFilterState, allDayFilterState } = useTagFilterContext();
  const matchingEvents = getEventsByDay(data.coalesce, day as DayOfWeek);
  const filteredEvents = filterEvents(
    matchingEvents,
    allDayFilterState,
    tagFilterState
  );
  return (
    <div className={styles['container']}>
      <div className="mb-3">
        <Prompt title={`${day} Events`}>
          <TagFilterGroupComponent />
        </Prompt>
      </div>
      <DateSelectorComponent day={day} route="events" />
      {filteredEvents.map((event) => (
        <SingleEventTime event={event} key={event.event_id} />
      ))}
    </div>
  );
}

export default EventsDayComponent;
