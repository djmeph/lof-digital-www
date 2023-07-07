import styles from './themed-burn-logo.module.scss';

export function ThemedBurnLogo() {
  return (
    <img
      alt="2023 LoF Logo"
      src="/log-logo-basic.svg"
      className={styles['svg-wrapper']}
    />
  );
}

export default ThemedBurnLogo;
