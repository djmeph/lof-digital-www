import { WeekView } from '@devexpress/dx-react-scheduler-material-ui';
import { useRouter } from 'next/router';

import { useNavbarContext } from 'libs/shared/src/context/navbar';

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
  const { setExpanded } = useNavbarContext();
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
      onClick={() => {
        router.push(`/day-view/${formatDate(startDate, { weekday: 'long' })}`);
        setExpanded(false);
      }}
    />
  );
}
