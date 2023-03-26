import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';

import { useFavoritesContext } from '@lof-digital-www/shared';
import { useEventsFeedContext } from '@lof-digital-www/www-events';

import { getFavorites } from '../../methods/events-feed';
import { coalesce2Scheduler } from '../../methods/scheduler-convert';
import AppointmentContentComponent from '../appointment-content/appointment-content';

import styles from './day-view.module.scss';

export interface DayViewProps {
  currentDate: string;
}

export function DayViewComponent({ currentDate }: DayViewProps) {
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);
  const schedulerData = coalesce2Scheduler({ coalesce: savedEvents });

  return (
    <div className={styles['container']}>
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <DayView startDayHour={0} endDayHour={24} />
          <Appointments
            appointmentContentComponent={AppointmentContentComponent}
          />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default DayViewComponent;
