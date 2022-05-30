import { WeekView } from '@devexpress/dx-react-scheduler-material-ui';
import { useRouter } from 'next/router';

import styles from './day-scale-cell.module.scss';

export function DayScaleCellComponent({
  formatDate,
  startDate,
  endDate,
  endOfGroup,
  groupingInfo,
  hasRightBorder,
  today,
}: WeekView.DayScaleCellProps): JSX.Element {
  const router = useRouter();
  return (
    <WeekView.DayScaleCell
      formatDate={formatDate}
      startDate={startDate}
      endDate={endDate}
      endOfGroup={endOfGroup}
      groupingInfo={groupingInfo}
      hasRightBorder={hasRightBorder}
      today={today}
      className={styles['link']}
      onClick={() =>
        router.push(`/day-view/${formatDate(startDate, { weekday: 'long' })}`)
      }
    />
  );
}
