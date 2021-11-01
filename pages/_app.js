import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css'
import Layout from '../hoc/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1WZEXKXJ0K"></Script>
      <Script type="text/javascript" src="/js/analytics.js"></Script>
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="2f7dcd32-8bd8-433e-bb6f-03dadafb2ad9" data-blockingmode="auto" type="text/javascript"></Script>
      <Head>
        <link rel="icon" href="/logoIcon.png" />
        <meta property="og:site_name" content="GoWork ApS" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
