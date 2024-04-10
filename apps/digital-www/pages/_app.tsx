import { AppProps } from 'next/app';
import { useEffect } from 'react';
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
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <DigitalWwwFeedProvider>
        <TagFilterProvider>
          <FavoritesProvider>
            <HeadComponent />
            <NavbarComponent />
            <div className={`py-5 ${styles['page-buffer']}`}>
              <div className={styles['page-bg-overlay']}>
                <Component {...pageProps} />
              </div>
            </div>
          </FavoritesProvider>
        </TagFilterProvider>
      </DigitalWwwFeedProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
