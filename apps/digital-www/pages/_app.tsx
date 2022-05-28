import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComponent } from '@lof-digital-www/shared';
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
        <Head>
          <title>Lakes of Fire 2022 Digital WWW</title>
        </Head>
        <NavbarComponent />
        <div className={styles['page-buffer']}>
          <Component {...pageProps} />
        </div>
      </DigitalWwwFeedProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
