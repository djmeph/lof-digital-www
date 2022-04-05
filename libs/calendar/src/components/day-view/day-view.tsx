import styles from './day-view.module.scss';
import Paper from '@mui/material/Paper';
import { AppointmentModel, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

/* eslint-disable-next-line */
export interface DayViewProps {
  schedulerData: AppointmentModel[];
  currentDate: string;
}

export function DayViewComponent(props: DayViewProps) {
  return (
    <div className={styles['container']}>
      <Paper>
        <Scheduler
          data={props.schedulerData}
        >
          <ViewState
            currentDate={props.currentDate}
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

export default DayViewComponent;
