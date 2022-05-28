import styles from './heart-count.module.scss';

/* eslint-disable-next-line */
export interface HeartCountProps {
  heartCount: number;
}

export function HeartCount({ heartCount }: HeartCountProps) {
  if (heartCount > 0) {
    return (
      <span className={styles['container']}>Heart Count: {heartCount}</span>
    );
  }
  return <span />;
}

export default HeartCount;
