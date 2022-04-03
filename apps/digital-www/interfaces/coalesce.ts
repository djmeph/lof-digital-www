export enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export enum EventRecurrance {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}

export interface EventTime {
  starting: string;
  ending: string;
  day_of_week: DayOfWeek;
  all_day: boolean;
}

export interface WwwEvent {
  title: string;
  event_description: string;
  site_id: null,
  hosting_location: string;
  event_recurrence: EventRecurrance;
  heart_count: number;
  alcohol: boolean;
  red_light: boolean;
  fire_art: boolean;
  spectacle: boolean;
  crafting: boolean;
  food: boolean;
  sober: boolean;
  event_times: EventTime[];
}

export interface DataCoalesce {
  coalesce: WwwEvent[];
}
