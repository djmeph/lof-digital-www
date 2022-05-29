import { BaseView, ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

import { useFavoritesContext } from '@lof-digital-www/shared';
import { datesOfWeek, useEventsFeedContext } from '@lof-digital-www/www-events';

import { getFavorites } from '../../methods/events-feed';
import { coalesce2Scheduler } from '../../methods/scheduler-convert';
import AppointmentContentComponent from '../appointment-content/appointment-content';

import styles from './week-view.module.scss';

export function WeekViewComponent() {
  const currentDate = `${datesOfWeek.Wednesday}T00:00:00`;
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);
  const schedulerData = coalesce2Scheduler({ coalesce: savedEvents });
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
          <Appointments
            appointmentContentComponent={AppointmentContentComponent}
          />
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
