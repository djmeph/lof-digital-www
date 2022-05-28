import { useRouter } from 'next/router';
import { Tab, Tabs } from 'react-bootstrap';

import { DayOfWeek } from '@lof-digital-www/www-events';

import styles from './date-selector.module.scss';

interface DateSelectorProps {
  day: DayOfWeek;
  route: string;
}

export function DateSelectorComponent({ route, day }: DateSelectorProps) {
  const router = useRouter();
  const turnThePage = async (day: string | null) => {
    await router.push(`/${route}/${day}`);
  };

  return (
    <div className={styles['container']}>
      <Tabs activeKey={day} onSelect={turnThePage}>
        <Tab eventKey={DayOfWeek.WEDNESDAY} title={DayOfWeek.WEDNESDAY} />
        <Tab eventKey={DayOfWeek.THURSDAY} title={DayOfWeek.THURSDAY} />
        <Tab eventKey={DayOfWeek.FRIDAY} title={DayOfWeek.FRIDAY} />
        <Tab eventKey={DayOfWeek.SATURDAY} title={DayOfWeek.SATURDAY} />
        <Tab eventKey={DayOfWeek.SUNDAY} title={DayOfWeek.SUNDAY} />
      </Tabs>
    </div>
  );
}

export default DateSelectorComponent;
