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
  [DayOfWeek.MONDAY]: '2023-07-10',
  [DayOfWeek.TUESDAY]: '2023-07-11',
  [DayOfWeek.WEDNESDAY]: '2023-07-12',
  [DayOfWeek.THURSDAY]: '2023-07-13',
  [DayOfWeek.FRIDAY]: '2023-07-14',
  [DayOfWeek.SATURDAY]: '2023-07-15',
  [DayOfWeek.SUNDAY]: '2023-07-16',
};

export enum EventRecurrance {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
