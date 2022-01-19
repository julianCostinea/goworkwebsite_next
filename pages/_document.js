import Document, { Html, Head, Main, NextScript } from 'next/document';

class Dokument extends Document {
    render() {
        return (
            <Html lang="da-DK">
                <Head>
                </ Head >
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Dokument;