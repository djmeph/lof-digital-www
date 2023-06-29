import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface MapProps {}

export function Map(props: MapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Map!</h1>
    </div>
  );
}

export default Map;
