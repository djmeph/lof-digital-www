import styles from './index.module.scss';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { datesOfWeek, useEventsFeedContext } from '@lof-digital-www/www-events';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router'

/* eslint-disable-next-line */
export interface DayViewProps {}

export function DayViewPage(props: DayViewProps) {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');
  const currentDate = `${datesOfWeek[day]}T00:00:00`;
  const data = useEventsFeedContext();

  const schedulerData = data.coalesce.reduce((previousValue, currentValue) => {
    previousValue = [...previousValue, ...currentValue.event_times.map((eventTime) => {
      if (eventTime.all_day) {
        return {
          startDate: `${datesOfWeek[eventTime.day_of_week]}T00:00:00`,
          endDate: `${datesOfWeek[eventTime.day_of_week]}T23:59:59`,
          title: currentValue.title
        }
      }
      return {
        startDate: eventTime.starting,
        endDate: eventTime.ending,
        title: currentValue.title
      };
    })];
    return previousValue;
  }, []);

  return (
    <div className={styles['container']}>
      <Paper>
        <Scheduler
          data={schedulerData}
        >
          <ViewState
            currentDate={currentDate}
          />
          <DayView
            startDayHour={0}
            endDayHour={24}
          />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default DayViewPage;
