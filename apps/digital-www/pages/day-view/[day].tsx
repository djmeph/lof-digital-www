import { useRouter } from 'next/router';

import {
  coalesce2Scheduler,
  DateSelectorComponent,
  DayViewComponent,
  getFavorites,
} from '@lof-digital-www/calendar';
import { useFavoritesContext } from '@lof-digital-www/shared';
import {
  datesOfWeek,
  DayOfWeek,
  useEventsFeedContext,
} from '@lof-digital-www/www-events';

import styles from './index.module.scss';

export function DayViewPage() {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');
  const currentDate = `${datesOfWeek[day]}T00:00:00`;
  const data = useEventsFeedContext();
  const { favorites } = useFavoritesContext();
  const savedEvents = getFavorites(data.coalesce, favorites);
  const schedulerData = coalesce2Scheduler({ coalesce: savedEvents });

  return (
    <div className={styles['container']}>
      <DateSelectorComponent day={day as DayOfWeek} route="day-view" />
      <DayViewComponent
        schedulerData={schedulerData}
        currentDate={currentDate}
      />
    </div>
  );
}

export default DayViewPage;
