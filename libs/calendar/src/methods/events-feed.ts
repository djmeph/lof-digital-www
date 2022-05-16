import { DayOfWeek, WwwEvent, WwwEventSingleTime } from "@lof-digital-www/www-events";

export const getEventById = (
  events: WwwEvent[],
  eventId: string | string[]
): WwwEvent[] => {
  if (typeof eventId === 'string') {
    return events.filter((n) => n.event_id === Number(eventId));
  }

  return events.filter(n => eventId
    .map(n => Number(n))
    .includes(n.event_id));
}

export const getEventsByDay = (
  events: WwwEvent[],
  day: DayOfWeek
): WwwEventSingleTime[] => {
  // Filter list to all events that match the selected day
  const filteredList = events.filter((n) => {
    const eventsThatMatch = n.event_times.filter((nn) => nn.day_of_week === day);
    return eventsThatMatch.length;
  });

  // Create an array with an instance of each event for each matching date/time
  const extractMatchingDates = filteredList.reduce<WwwEventSingleTime[]>((previousValue, currentValue) => {
    const eventTimesThatMatch = currentValue.event_times.filter((n) => n.day_of_week === day);
    for (const match of eventTimesThatMatch) {
      previousValue.push({
        ...currentValue,
        eventTime: match
      });
    }
    return previousValue;
  }, []);

  // Sort the matching instances by start time
  const sorted = extractMatchingDates.sort((a, b) => {
    if (a.eventTime.all_day && b.eventTime.all_day) return 0;
    if (a.eventTime.all_day) return -1;
    if (b.eventTime.all_day) return 1;
    const aDate = new Date(a.eventTime.starting);
    const bDate = new Date(b.eventTime.starting);
    return aDate.getTime() - bDate.getTime();
  });

  return sorted;
}
