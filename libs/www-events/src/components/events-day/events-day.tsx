import { Dispatch, SetStateAction } from 'react';

import {
  DateSelectorComponent,
  filterEvents,
  getEventsByDay,
} from '@lof-digital-www/calendar';
import {
  Banner,
  TagFilterGroupComponent,
  useTagFilterContext,
} from '@lof-digital-www/shared';

import { useEventsFeedContext } from '../../context/EventsFeedContext';
import { DayOfWeek } from '../../interfaces/www-events.enum';
import SingleEventTime from '../single-event-time/single-event-time';

import styles from './events-day.module.scss';

export interface EventsDayProps {
  day: DayOfWeek;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function EventsDayComponent({ day, setExpanded }: EventsDayProps) {
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
        <Banner title={`${day} Events`}>
          <TagFilterGroupComponent />
        </Banner>
      </div>
      <DateSelectorComponent
        day={day}
        route="events"
        setExpanded={setExpanded}
      />
      {filteredEvents.map((event) => (
        <SingleEventTime
          event={event}
          key={event.event_id}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
}

export default EventsDayComponent;
