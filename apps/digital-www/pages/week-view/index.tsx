import {
  coalesce2Scheduler,
  WeekViewComponent,
} from '@lof-digital-www/calendar';
import { datesOfWeek, useEventsFeedContext } from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function WeekView() {
  const currentDate = `${datesOfWeek.Wednesday}T00:00:00`;
  const data = useEventsFeedContext();
  const schedulerData = coalesce2Scheduler(data);

  return (
    <div className={styles['container']}>
      <WeekViewComponent
        schedulerData={schedulerData}
        currentDate={currentDate}
      />
    </div>
  );
}

export default WeekView;
