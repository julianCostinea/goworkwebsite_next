import Script from 'next/script';
import React from 'react';

function CookieDeclaration() {
    return (
        <React.Fragment>
            <link rel="stylesheet" href="cookiepolicy.css"></link>
            <Script id="CookieDeclaration" src="https://consent.cookiebot.com/2f7dcd32-8bd8-433e-bb6f-03dadafb2ad9/cd.js" type="text/javascript" async></Script>
        </React.Fragment>
    )
}

export default CookieDeclaration


