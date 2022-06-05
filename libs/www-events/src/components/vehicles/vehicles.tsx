import { useEventsFeedContext } from '../../context/EventsFeedContext';

import styles from './vehicles.module.scss';

/* eslint-disable-next-line */
export interface VehiclesProps {}

export function VehiclesComponent(props: VehiclesProps) {
  const { vehicles } = useEventsFeedContext();

  return (
    <div className={styles['container']}>
      <h1>Welcome to Vehicles!</h1>
      {vehicles.map((vehicle) => (
        <h1 key={vehicle.id}>Vehicle Item</h1>
      ))}
    </div>
  );
}

export default VehiclesComponent;
