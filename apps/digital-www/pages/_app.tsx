import { AppProps } from 'next/app';
// import { useEffect } from 'react';
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
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', function () {
  //       navigator.serviceWorker.register('/service-worker.js').then(
  //         function (registration) {
  //           console.log(
  //             'Service Worker registration successful with scope: ',
  //             registration.scope
  //           );
  //         },
  //         function (err) {
  //           console.log('Service Worker registration failed: ', err);
  //         }
  //       );
  //     });
  //   }
  // }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <DigitalWwwFeedProvider>
        <TagFilterProvider>
          <FavoritesProvider>
            <HeadComponent />
            <NavbarComponent />
            <div className={styles['page-buffer']}>
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
