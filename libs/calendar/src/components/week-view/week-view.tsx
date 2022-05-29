import {
  AppointmentModel,
  BaseView,
  ViewState,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import { ComponentType, ReactElement } from 'react';

import styles from './week-view.module.scss';

export interface WeekViewProps {
  schedulerData: AppointmentModel[];
  currentDate: string;
}

export function WeekViewComponent({
  schedulerData,
  currentDate,
}: WeekViewProps) {
  return (
    <div className={styles['container']}>
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={currentDate} />
          <WeekView
            startDayHour={0}
            endDayHour={24}
            excludedDays={[0, 1, 2]}
            dayScaleLayoutComponent={DayScaleLayoutComponent}
          />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  );
}

export default WeekViewComponent;

function DayScaleLayoutComponent({
  cellsData,
  cellComponent,
  rowComponent,
  formatDate,
}: WeekView.DayScaleLayoutProps): JSX.Element {
  const router = useRouter();
  return (
    <WeekView.DayScaleLayout
      cellsData={cellsData}
      cellComponent={(props: BaseView.DayScaleCellProps) => {
        return cellComponent({
          ...props,
          className: styles['link'],
          onClick: () =>
            router.push(
              `/day-view/${formatDate(props.startDate, { weekday: 'long' })}`
            ),
        });
      }}
      rowComponent={rowComponent}
      formatDate={formatDate}
    />
  );
}
