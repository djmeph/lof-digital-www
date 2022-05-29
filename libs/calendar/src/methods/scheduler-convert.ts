import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { DataCoalesce, datesOfWeek } from '@lof-digital-www/www-events';

export const coalesce2Scheduler = (data: DataCoalesce) =>
  data.coalesce.reduce<AppointmentModel[]>((previousValue, currentValue) => {
    previousValue = [
      ...previousValue,
      ...currentValue.event_times.map((eventTime) => {
        if (eventTime.all_day) {
          return {
            startDate: `${datesOfWeek[eventTime.day_of_week]}T00:00:00`,
            endDate: `${datesOfWeek[eventTime.day_of_week]}T23:59:59`,
            title: currentValue.title,
            id: currentValue.event_id,
          };
        }
        return {
          startDate: eventTime.starting,
          endDate: eventTime.ending,
          title: currentValue.title,
          id: currentValue.event_id,
        };
      }),
    ];
    return previousValue;
  }, []);
