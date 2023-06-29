import styles from './lof-map.module.scss';

/* eslint-disable-next-line */
export interface LofMapProps {}

export function LofMap(props: LofMapProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LofMap!</h1>
    </div>
  );
}

export default LofMap;
