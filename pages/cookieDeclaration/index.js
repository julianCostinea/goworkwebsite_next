import Script from 'next/script';

function CookieDeclaration({ Component, pageProps }) {
    return (

            <Script id="CookieDeclaration" src="https://consent.cookiebot.com/2f7dcd32-8bd8-433e-bb6f-03dadafb2ad9/cd.js" type="text/javascript" async></Script>

    );
}

export default CookieDeclaration


