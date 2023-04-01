import React from "react";
import dynamic from "next/dynamic";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../../lib/api";
import Preloader from "../components/preloader";
import Banner from '../components/homeBanner';
import RelatedTools from "../components/relatedTools";
import FeatureBlog from '../components/featureBlog'



const Home = ({ articles, homepage, category }) => {

  console.log('homepage ', homepage)
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <div className="">
        <div className="">
          <Banner homepage={homepage} />
          <RelatedTools articles={articles} />
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
  const [articlesRes, homepageRes, categoryRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
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
      homepage: homepageRes.data,

    },
    // revalidate: 60,
  };

}

export default Home;