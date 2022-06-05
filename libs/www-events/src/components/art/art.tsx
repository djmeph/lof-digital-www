import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './art.module.scss';

/* eslint-disable-next-line */
export interface ArtProps {}

export function ArtComponent(props: ArtProps) {
  const { art } = useEventsFeedContext();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Art!</h1>
      {art.map((a) => (
        <h1 key={a.id}>Art Item</h1>
      ))}
    </div>
  );
}

export default ArtComponent;
