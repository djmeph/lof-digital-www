import { WwwEvent } from "@lof-digital-www/www-events";

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

