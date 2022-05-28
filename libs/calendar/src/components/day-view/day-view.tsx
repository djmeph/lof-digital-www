import { AppointmentModel, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';

import styles from './day-view.module.scss';

/* eslint-disable-next-line */
export interface DayViewProps {
  schedulerData: AppointmentModel[];
  currentDate: string;
}

export function DayViewComponent({ schedulerData, currentDate }: DayViewProps) {
  return (
    <div className={styles['container']}>
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <DayView startDayHour={0} endDayHour={24} />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default DayViewComponent;
