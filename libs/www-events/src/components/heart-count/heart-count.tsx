import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './heart-count.module.scss';

/* eslint-disable-next-line */
export interface HeartCountProps {
  heartCount: number;
}

export function HeartCountComponent({ heartCount }: HeartCountProps) {
  if (heartCount > 0) {
    return <div className={styles['container']}><FontAwesomeIcon size="1x" icon={faHeart} className={styles['red']} /> {heartCount}</div>;
  }
  return <span />;
}

export default HeartCountComponent;
