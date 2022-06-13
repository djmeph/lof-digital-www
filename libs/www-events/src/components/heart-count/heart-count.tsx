import styles from './heart-count.module.scss';

/* eslint-disable-next-line */
export interface HeartCountProps {
  heartCount: number;
}

export function HeartCountComponent({ heartCount }: HeartCountProps) {
  if (heartCount > 0) {
    return <div className={styles['container']}>Heart Count: {heartCount}</div>;
  }
  return <span />;
}

export default HeartCountComponent;
