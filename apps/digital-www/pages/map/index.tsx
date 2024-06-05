import { LofMap } from '@lof-digital-www/lof-map';

import styles from './index.module.scss';

export function Map() {
  return (
    <div className={styles['container']}>
      <LofMap />
    </div>
  );
}

export default Map;
