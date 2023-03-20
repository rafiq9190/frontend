import React from "react";
import dynamic from "next/dynamic";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../../lib/api";
import Preloader from "../components/preloader";
import Banner from '../components/homeBanner';
// import RelatedTools from "../components/relatedTools";

// const Banner = dynamic(() => import('../components/homeBanner'), {
//   ssr: false,
//   loading: () => <Preloader />
// });
const RelatedTools = dynamic(() => import('../components/relatedTools'));

const Home = ({ articles, homepage, global }) => {
  console.log('global', global)
  const logo = global.attributes.logo
  // const whiteLogo = global.attribute.whiteLogo

  return (
    <Layout logo={logo} >
      <Seo seo={homepage.attributes.seo} />
      <div className="">
        <div className="">
          <Banner homepage={homepage} />
          {/* <Articles articles={articles}/> */}
          <RelatedTools articles={articles} />

          {/* <FeatureBlog articles={articles} /> */}
          {/* <Articles articles={articles} /> */}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  // Run API calls in parallel

  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    // revalidate: 900,
  };

}

export default Home;