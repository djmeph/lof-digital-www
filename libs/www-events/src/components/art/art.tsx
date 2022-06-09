import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './art.module.scss';

/* eslint-disable-next-line */
export interface ArtProps {}

export function ArtComponent(props: ArtProps) {
  const { art } = useEventsFeedContext();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Art!</h1>
      {art.map((item) => (
        <div key={item.id} className="art-item">
          <h2 className="art-item-name">{item.title}</h2>
          <h3 className="art-item-type">{item.type}</h3>
          <div className="art-item-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default ArtComponent;
