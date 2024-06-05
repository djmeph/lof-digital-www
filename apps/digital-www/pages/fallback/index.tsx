import styles from './index.module.scss';

export function Fallback() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Fallback!</h1>
    </div>
  );
}

export default Fallback;
