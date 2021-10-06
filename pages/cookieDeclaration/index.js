import Script from 'next/script';
import Layout from '../../hoc/Layout/Layout';

function CookieDeclaration({ Component, pageProps }) {
    return (
        <Layout>
            <Script id="CookieDeclaration" src="https://consent.cookiebot.com/2f7dcd32-8bd8-433e-bb6f-03dadafb2ad9/cd.js" type="text/javascript" async></Script>      <Script type="text/javascript" src="/js/analytics.js"></Script>
        </Layout>
    )
}

export default CookieDeclaration


