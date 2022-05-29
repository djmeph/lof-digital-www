import { WeekViewComponent } from '@lof-digital-www/calendar';

import styles from './index.module.scss';

export function WeekView() {
  return (
    <div className={styles['container']}>
      <WeekViewComponent />
    </div>
  );
}

export default WeekView;
