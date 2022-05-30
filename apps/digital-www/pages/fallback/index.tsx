import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface FallbackProps {}

export function Fallback(props: FallbackProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Fallback!</h1>
    </div>
  );
}

export default Fallback;
