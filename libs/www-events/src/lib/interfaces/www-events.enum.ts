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
  [DayOfWeek.MONDAY]: '2022-06-13',
  [DayOfWeek.TUESDAY]: '2022-06-14',
  [DayOfWeek.WEDNESDAY]: '2022-06-15',
  [DayOfWeek.THURSDAY]: '2022-06-16',
  [DayOfWeek.FRIDAY]: '2022-06-17',
  [DayOfWeek.SATURDAY]: '2022-06-18',
  [DayOfWeek.SUNDAY]: '2022-06-19',
};

export enum EventRecurrance {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
