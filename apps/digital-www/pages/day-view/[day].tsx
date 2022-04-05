import styles from './index.module.scss';
import { datesOfWeek, DayOfWeek, useEventsFeedContext } from '@lof-digital-www/www-events';
import { useRouter } from 'next/router'
import { coalesce2Scheduler, DateSelectorComponent, DayViewComponent } from '@lof-digital-www/calendar';


/* eslint-disable-next-line */
export interface DayViewProps {}

export function DayViewPage(props: DayViewProps) {
  const router = useRouter();
  const { day } = router.query;
  if (typeof day !== 'string') throw Error('Invalid Parameter');
  const currentDate = `${datesOfWeek[day]}T00:00:00`;
  const data = useEventsFeedContext();
  const schedulerData = coalesce2Scheduler(data);

  return (
    <div className={styles['container']}>
      <DateSelectorComponent day={day as DayOfWeek} />
      <DayViewComponent schedulerData={schedulerData} currentDate={currentDate} />
    </div>
  );
}

export default DayViewPage;
