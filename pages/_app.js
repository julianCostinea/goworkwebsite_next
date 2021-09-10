import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css'
import Layout from '../hoc/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/logoIcon.png" />
      </Head>
      <Component {...pageProps} />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1WZEXKXJ0K"></Script>
      <Script type="text/javascript" src="/js/analytics.js"></Script>
    </Layout>
  );
}

export default MyApp
