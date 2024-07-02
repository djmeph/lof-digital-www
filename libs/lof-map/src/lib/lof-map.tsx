import styles from './lof-map.module.scss';

export function LofMap() {
  return (
    <div className={styles['container']}>
      <iframe
        title="Lakes of Fire 2024 Interactive Map"
        src="https://opensea-2024-map.lof.breakfreeproductions.com/"
      />
    </div>
  );
}

export default LofMap;
