import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'
class MyDocument extends Document {
  render() {
    return (
      <Html>

        <Head>
          {/* eslint-disable-next-line */}

          <link defer href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400;1,700&display=swap"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script async src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous" strategy ="afterInteractive" />
          <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossOrigin="anonymous" strategy ="afterInteractive" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;