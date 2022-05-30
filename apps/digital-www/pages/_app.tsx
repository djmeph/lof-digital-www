import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FavoritesProvider,
  HeadComponent,
  NavbarComponent,
  TagFilterProvider,
} from '@lof-digital-www/shared';
import { DigitalWwwFeedProvider } from '@lof-digital-www/www-events';

import styles from './index.module.scss';

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     cacheTime: 1000 * 60 * 60 * 24, // 24 hours
  //   },
  // },
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DigitalWwwFeedProvider>
        <TagFilterProvider>
          <FavoritesProvider>
            <HeadComponent />
            <NavbarComponent />
            <div className={styles['page-buffer']}>
              <Component {...pageProps} />
            </div>
          </FavoritesProvider>
        </TagFilterProvider>
      </DigitalWwwFeedProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
