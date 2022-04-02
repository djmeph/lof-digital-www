import { AppProps } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to digital-www!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
