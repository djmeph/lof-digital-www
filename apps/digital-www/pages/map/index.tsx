import { LofMap } from '@lof-digital-www/lof-map';

import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface MapProps {}

export function Map(props: MapProps) {
  return (
    <div className={styles['container']}>
      <LofMap />
    </div>
  );
}

export default Map;
