import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './camps.module.scss';

/* eslint-disable-next-line */
export interface CampsProps {}

export function CampsComponent(props: CampsProps) {
  const { camps } = useEventsFeedContext();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Camps!</h1>
      {camps.map((camp) => (
        <h1 key={camp.id}>Art Item</h1>
      ))}
    </div>
  );
}

export default CampsComponent;
