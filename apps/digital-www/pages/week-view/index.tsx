import {
  coalesce2Scheduler,
  getFavorites,
  WeekViewComponent,
} from '@lof-digital-www/calendar';
import { useFavoritesContext } from '@lof-digital-www/shared';
import { datesOfWeek, useEventsFeedContext } from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function WeekView() {
  const currentDate = `${datesOfWeek.Wednesday}T00:00:00`;
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);
  const schedulerData = coalesce2Scheduler({ coalesce: savedEvents });

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
