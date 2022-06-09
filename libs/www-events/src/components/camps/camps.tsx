import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './camps.module.scss';

/* eslint-disable-next-line */
export interface CampsProps {}

export function CampsComponent(props: CampsProps) {
  const { camps } = useEventsFeedContext();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Camps!</h1>
      {camps.map((item) => (
        <div key={item.id} className="camp-item">
          <h2 className="camp-item-name">{item.name}</h2>
          <h3 className="camp-item-location">
            In the {item.neighborhood} at {item.site}
          </h3>
          <div className="camp-item-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
}

export default CampsComponent;
