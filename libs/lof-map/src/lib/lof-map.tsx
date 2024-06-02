import styles from './lof-map.module.scss';

/* eslint-disable-next-line */
export interface LofMapProps {}

export function LofMap(props: LofMapProps) {
  return (
    <div className={styles['container']}>
      {/* <iframe
        title="Lakes of Fire 2024 Interactive Map"
        src="https://opensea-2023-map.lof.breakfreeproductions.com/"
      /> */}
      <img src="lof-generic-map.png" alt="Lucky Lake Campground General Map" />
    </div>
  );
}

export default LofMap;
