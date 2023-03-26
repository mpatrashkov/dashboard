import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

import { Nunito } from '@next/font/google';
import classNames from 'classnames';

const nunito = Nunito();

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to admin!</title>
      </Head>
      <main className={classNames(nunito.className, 'app')}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
