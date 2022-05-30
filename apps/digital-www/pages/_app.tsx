import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FavoritesProvider,
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
            <Head>
              <title>Lakes of Fire 2022 Digital WWW</title>
              <link rel="icon" type="image/x-icon" href="favicon.ico" />
              <link rel="shortcut icon" href="favicon.ico" />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest" />
              <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
              />
              <meta name="format-detection" content="telephone=no" />
              <meta name="msapplication-tap-highlight" content="no" />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta name="theme-color" content="#ffffff" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta
                name="apple-mobile-web-app-status-bar-style"
                content="white"
              />
              <meta name="msapplication-config" content="/browserconfig.xml" />
            </Head>
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
