import { Scheduler, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler as MuiSchedular,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';

import { useFavoritesContext } from '@lof-digital-www/shared';
import { datesOfWeek, useEventsFeedContext } from '@lof-digital-www/www-events';

import { getFavorites } from '../../methods/events-feed';
import { coalesce2Scheduler } from '../../methods/scheduler-convert';
import AppointmentContentComponent from '../appointment-content/appointment-content';
import { DayScaleCellComponent } from '../day-scale-cell/day-scale-cell';

import styles from './week-view.module.scss';

export function WeekViewComponent() {
  const rootComponent = (props: Scheduler.RootProps) => {
    return <MuiSchedular.Root {...props} />;
  };
  const currentDate = `${datesOfWeek.Wednesday}T00:00:00`;
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);
  const schedulerData = coalesce2Scheduler({ coalesce: savedEvents });
  return (
    <div className={styles['container']}>
      <Paper>
        <Scheduler
          data={schedulerData}
          rootComponent={rootComponent}
          locale="US-English"
          firstDayOfWeek={1}
          height="auto"
        >
          <ViewState currentDate={currentDate} />
          <WeekView
            startDayHour={0}
            endDayHour={24}
            excludedDays={[0, 1, 2]}
            dayScaleCellComponent={DayScaleCellComponent}
          />
          <Appointments
            appointmentContentComponent={AppointmentContentComponent}
          />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default WeekViewComponent;
