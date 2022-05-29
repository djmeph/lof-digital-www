import {
  DayOfWeek,
  WwwEvent,
  WwwEventSingleTime,
} from '@lof-digital-www/www-events';

/**
 * Returns a single event or an array of events by event ID
 */
export function getEventById(
  events: WwwEvent[],
  eventId: string | string[]
): WwwEvent[] {
  if (typeof eventId === 'string') {
    return events.filter((n) => n.event_id === Number(eventId));
  }

  return events.filter((n) =>
    eventId.map((n) => Number(n)).includes(n.event_id)
  );
}

/**
 * Filters WwwEvent array by Day of Week returns a sorted array
 * of each event instance
 */
export function getEventsByDay(
  events: WwwEvent[],
  day: DayOfWeek
): WwwEventSingleTime[] {
  const filteredList = getEventMatchesByDay(events, day);
  const extractMatchingDates = separateEventsByInstance(filteredList, day);
  return sortEventInstancesByStartTime(extractMatchingDates);
}

/**
 * Filter list to all events that match the selected day
 */
export function getEventMatchesByDay(
  events: WwwEvent[],
  day: DayOfWeek
): WwwEvent[] {
  return events.filter((n) => {
    const eventsThatMatch = n.event_times.filter(
      (nn) => nn.day_of_week === day
    );
    return eventsThatMatch.length;
  });
}

/**
 * Create an array with an instance of each event time for each WwwEvent
 */
export function separateEventsByInstance(
  events: WwwEvent[],
  day: DayOfWeek
): WwwEventSingleTime[] {
  return events.reduce<WwwEventSingleTime[]>((previousValue, currentValue) => {
    const eventTimesThatMatch = currentValue.event_times.filter(
      (n) => n.day_of_week === day
    );
    for (const match of eventTimesThatMatch) {
      previousValue.push({
        ...currentValue,
        eventTime: match,
      });
    }
    return previousValue;
  }, []);
}

/**
 * Sort event instances by start time
 */
export function sortEventInstancesByStartTime(
  eventInstances: WwwEventSingleTime[]
): WwwEventSingleTime[] {
  return eventInstances.sort((a, b) => {
    if (a.eventTime.all_day && b.eventTime.all_day) return 0;
    if (a.eventTime.all_day) return -1;
    if (b.eventTime.all_day) return 1;
    const aDate = new Date(a.eventTime.starting);
    const bDate = new Date(b.eventTime.starting);
    return aDate.getTime() - bDate.getTime();
  });
}

/**
 * Filter Events
 */
export function filterEvents(
  events: WwwEventSingleTime[],
  filters: Record<string, boolean>,
  allDayFilterState: boolean
): WwwEventSingleTime[] {
  return events.filter((event: any) => {
    // All Day filter acts on its own.
    if (allDayFilterState && event.eventTime.all_day) {
      return false;
    }

    // Match any of the other filters to return true
    const enabledFilters = Object.keys(filters).filter(
      (key: string) => !filters[key]
    );
    let enabled = false;
    for (const filter of enabledFilters) {
      if (event[filter]) {
        enabled = true;
      }
    }

    return enabled;
  });
}

/**
 * Filter Events by Favorites
 */
export function getFavorites(
  events: WwwEvent[],
  favorites: number[]
): WwwEvent[] {
  return events.filter((event) => favorites.includes(event.event_id));
}
