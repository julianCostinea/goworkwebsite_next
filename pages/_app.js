import Head from 'next/head';

import '../styles/globals.css'
import Layout from '../hoc/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Head> 
    <link rel="icon" href="/logoIcon.png" />
    </Head>
    <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp
