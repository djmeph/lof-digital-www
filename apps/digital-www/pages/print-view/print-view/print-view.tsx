import styles from './print-view.module.css';

/* eslint-disable-next-line */
export interface PrintViewProps {}

export function PrintView(props: PrintViewProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PrintView!</h1>
    </div>
  );
}

export default PrintView;
