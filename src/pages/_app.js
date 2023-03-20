import App from "next/app";
import Head from "next/head";
import Script from 'next/script'
import "../../assets/css/style.css";
import { createContext, useState, useEffect } from "react";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Preloader from "../components/preloader";

import 'bootstrap/dist/css/bootstrap.min.css';

// Store Strapi Global object in context
export const GlobalContext = createContext({});
export function reportWebVitals(metric) {
  console.log("metric", metric)
}

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;
  const [showChild, setShowChild] = useState(false);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    setShowChild(true);

  }, [showChild]);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {

    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            href={getStrapiMedia(global.attributes.favicon)}
          />
        </Head>

        <GlobalContext.Provider value={global.attributes}>

        <Component {...pageProps} />

        </GlobalContext.Provider>
      </>
    );
  }
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      logo: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;