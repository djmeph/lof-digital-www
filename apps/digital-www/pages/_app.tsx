import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Head>
        <title>Welcome to digital-www!</title>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default CustomApp;
