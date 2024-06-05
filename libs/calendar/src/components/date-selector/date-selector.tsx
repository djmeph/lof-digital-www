import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useRef } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import { DayOfWeek } from '@lof-digital-www/www-events';

interface DateSelectorProps {
  day: DayOfWeek;
  route: string;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export function DateSelectorComponent({
  route,
  day,
  setExpanded,
}: DateSelectorProps) {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);
  const turnThePage = async (day: string | null) => {
    await router.push(`/${route}/${day}`);
    setExpanded(false);
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 62,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div ref={ref}>
      <Tabs activeKey={day} onSelect={turnThePage}>
        <Tab
          eventKey={DayOfWeek.WEDNESDAY}
          title={DayOfWeek.WEDNESDAY}
          tabClassName={
            day === DayOfWeek.WEDNESDAY ? 'text-black' : 'text-white'
          }
        />
        <Tab
          eventKey={DayOfWeek.THURSDAY}
          title={DayOfWeek.THURSDAY}
          tabClassName={
            day === DayOfWeek.THURSDAY ? 'text-black' : 'text-white'
          }
        />
        <Tab
          eventKey={DayOfWeek.FRIDAY}
          title={DayOfWeek.FRIDAY}
          tabClassName={day === DayOfWeek.FRIDAY ? 'text-black' : 'text-white'}
        />
        <Tab
          eventKey={DayOfWeek.SATURDAY}
          title={DayOfWeek.SATURDAY}
          tabClassName={
            day === DayOfWeek.SATURDAY ? 'text-black' : 'text-white'
          }
        />
        <Tab
          eventKey={DayOfWeek.SUNDAY}
          title={DayOfWeek.SUNDAY}
          tabClassName={day === DayOfWeek.SUNDAY ? 'text-black' : 'text-white'}
        />
      </Tabs>
    </div>
  );
}

export default DateSelectorComponent;
