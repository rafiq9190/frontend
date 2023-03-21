import React from "react";
import dynamic from "next/dynamic";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../../lib/api";
import Preloader from "../components/preloader";
import Banner from '../components/homeBanner';
import RelatedTools from "../components/relatedTools";



const Home = ({ articles, homepage, global }) => {
  console.log('global-index', global)
  let logo = global.attributes.logo
  return (
    <Layout logo={logo}>
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

export async function getServerSideProps({ req, res }) {
  // Run API calls in parallel
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
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
    // revalidate: 60,
  };

}

export default Home;