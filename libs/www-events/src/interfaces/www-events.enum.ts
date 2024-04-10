export enum DayOfWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export const datesOfWeek = {
  [DayOfWeek.MONDAY]: '2024-07-15',
  [DayOfWeek.TUESDAY]: '2024-07-16',
  [DayOfWeek.WEDNESDAY]: '2024-07-17',
  [DayOfWeek.THURSDAY]: '2024-07-18',
  [DayOfWeek.FRIDAY]: '2024-07-19',
  [DayOfWeek.SATURDAY]: '2024-07-20',
  [DayOfWeek.SUNDAY]: '2024-07-21',
};

export enum EventRecurrance {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
