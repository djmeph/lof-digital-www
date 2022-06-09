import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './vehicles.module.scss';

export function VehiclesComponent() {
  const { vehicles } = useEventsFeedContext();

  return (
    <div className="">
      {vehicles.map((item) => (
        <div key={item.id} className={styles['vehicle-item']}>
          <h2 className={styles['vehicle-item-name']}>{item.title}</h2>
          <div className={styles['vehicle-item-description']}>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}

export default VehiclesComponent;
