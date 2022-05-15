import styles from './heart-count.module.scss';

/* eslint-disable-next-line */
export interface HeartCountProps {
  heartCount: number;
}

export function HeartCount(props: HeartCountProps) {
  if (props.heartCount > 0) {
    return (
      <span className={styles['container']}>
        Heart Count: {props.heartCount}
      </span>
    );
  }
  return <span></span>
}

export default HeartCount;
