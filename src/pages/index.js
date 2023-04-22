import React, { useContext, useEffect } from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../../lib/api";
import Banner from '../components/homeBanner';
import { StoreContext } from "../../store";



const Home = ({ articles, homepage }) => {
  const { state, dispatch } = useContext(StoreContext);
  console.log('state', state)

  useEffect(() => {

    const storedData = localStorage.getItem("articles");
    if (storedData) {
      dispatch({ type: "SET_ARTICLES", payload: JSON.parse(storedData) });
    } else {
      dispatch({ type: "SET_ARTICLES", payload: articles });
      localStorage.setItem("articles", JSON.stringify(articles));
    }
  }, [articles,dispatch]);





  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />

      <Banner homepage={homepage} articles={state.articles} />
      {/* <RelatedTools articles={articles} /> */}

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
      homepage: homepageRes.data,
      category: categoriesRes.data


    },
    // revalidate: 60,
  };

}

export default Home;