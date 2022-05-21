import styles from './home-page.module.scss';
import { Prompt } from '@lof-digital-www/shared';

/* eslint-disable-next-line */
export interface HomePageProps {}

export function HomePage(props: HomePageProps) {
  return (
    <div className={styles['container']}>
      <Prompt />
    </div>
  );
}

export default HomePage;
