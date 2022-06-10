import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './vehicles.module.scss';

export function VehiclesComponent() {
  const { vehicles } = useEventsFeedContext();

  return (
    <div className="px-5">
      {vehicles
        .sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        })
        .map((item) => (
          <div key={item.id} className={`my-5 mx-1 ${styles['vehicle-item']}`}>
            <h2 className={styles['vehicle-item-name']}>{item.title}</h2>
            <div className={` ${styles['vehicle-item-description']}`}>
              {item.description}
            </div>
          </div>
        ))}
    </div>
  );
}

export default VehiclesComponent;
