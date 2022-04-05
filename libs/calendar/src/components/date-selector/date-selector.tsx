import { DayOfWeek } from '@lof-digital-www/www-events';
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import styles from './date-selector.module.scss';
import { useRouter } from 'next/router'

export function DateSelectorComponent() {
  const [key, setKey] = useState('date-selector');
  const router = useRouter();
  const turnThePage = (k: string | null) => {
    setKey(k || '');
    router.push(`/day-view/${k}`);
  };

  return (
    <div className={styles['container']}>
      <Tabs
        activeKey={key}
        onSelect={turnThePage}
      >
        <Tab eventKey={DayOfWeek.WEDNESDAY} title={DayOfWeek.WEDNESDAY}></Tab>
        <Tab eventKey={DayOfWeek.THURSDAY} title={DayOfWeek.THURSDAY}></Tab>
        <Tab eventKey={DayOfWeek.FRIDAY} title={DayOfWeek.FRIDAY}></Tab>
        <Tab eventKey={DayOfWeek.SATURDAY} title={DayOfWeek.SATURDAY}></Tab>
      </Tabs>
    </div>
  );
}

export default DateSelectorComponent;
