import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as fbq from '../lib/facebookPixel';
import Script from 'next/script';

import '../styles/globals.css'
import Layout from '../hoc/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = () => {
      fbq.pageview()
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <Layout>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3003946606526491');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1WZEXKXJ0K"></Script>
      <Script type="text/javascript" src="/js/analytics.js"></Script>
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="2f7dcd32-8bd8-433e-bb6f-03dadafb2ad9" data-blockingmode="auto" type="text/javascript"></Script>
      <Head>
        <link rel="icon" href="/logoIcon.png" />
        <meta property="og:site_name" content="GoWork ApS" />
        <meta property="og:type" content="website" />
        <meta name="facebook-domain-verification" content="4x6nmt7c7e7wawf34emil174qe40kn" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
