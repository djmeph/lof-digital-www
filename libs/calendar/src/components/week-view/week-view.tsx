import styles from './week-view.module.scss';
import Paper from '@mui/material/Paper';
import { AppointmentModel, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

/* eslint-disable-next-line */
export interface WeekViewProps {
  schedulerData: AppointmentModel[];
  currentDate: string;
}

export function WeekViewComponent(props: WeekViewProps) {
  return (
    <div className={styles['container']}>
      <Paper>
        <Scheduler data={props.schedulerData}>
          <ViewState currentDate={props.currentDate} />
          <WeekView
            startDayHour={0}
            endDayHour={24}
            excludedDays={[0,1,2]}
          />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default WeekViewComponent;
