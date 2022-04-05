import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DigitalWwwFeedProvider } from '@lof-digital-www/www-events';

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
          <title>Welcome to digital-www!</title>
        </Head>
        <Component {...pageProps} />
      </DigitalWwwFeedProvider>
    </QueryClientProvider>
  );
}

export default CustomApp;
