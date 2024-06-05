import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
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
  const [expanded, setExpanded] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <DigitalWwwFeedProvider>
        <TagFilterProvider>
          <FavoritesProvider>
            <HeadComponent />
            <NavbarComponent expanded={expanded} setExpanded={setExpanded} />
            <div className={`py-5 ${styles['page-buffer']}`}>
              <div className={styles['page-bg-overlay']}>
                <Component
                  {...pageProps}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              </div>
            </div>
          </FavoritesProvider>
        </TagFilterProvider>
      </DigitalWwwFeedProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
