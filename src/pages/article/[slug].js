import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Card from 'react-bootstrap/Card';

import { fetchAPI } from "../../../lib/api";
import { getStrapiMedia } from "../../../lib/media";
import NextImage from 'next/legacy/image'

const Article = ({ article, categories, allArticles }) => {
  const [feature, setFeature] = useState('')
  const [latest, setLatest] = useState('')
  
  const imageUrl = getStrapiMedia(article.attributes.image);

  let filtered = allArticles.data.filter((article) => {
    if (article.attributes.category.data?.attributes.name == 'feature') {
      return article
    }
  })
  let latestPosts = allArticles.data.filter((article) => {
    if (article.attributes.category?.data?.attributes.name == 'LatestPosts') {
      return article
    }

  })





  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  };

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="container">
        <div className='row'>
          <div className='col-12 col-lg-2 my-3'>
            <div className='large-screen-ad'></div>
          </div>
          <div className="col-12 col-lg-8">
            <h1 className="text-center my-3 base-color">Blog</h1>
            <div className="my-4">
              <NextImage
                // loader={myLoader}
                src={imageUrl}
                width={800}
                height={400}
                layout='responsive'
                className="img-fluid rounded-start"
                placeholder="blurDataURL"
                alt="" />
            </div>

          </div>
          <div className='col-12 col-lg-2 my-3'>
            <div className='large-screen-ad'></div>
          </div>
        </div>
        <div className="my-5">
          <div className="row">
            <div className="col-12 col-lg-4 order-1 order-lg-0">
              <div className='latest-post my-4'>
                <h2>Latest Post</h2>
                <div className='row'>
                  {
                    latestPosts && latestPosts.map((latestPost,index) => {


                      const getLatestPostImage = latestPost.attributes.image

                      return (
                        <div className='col-12 col-md-6 col-lg-12 my-2' key={index}>
                          <Link href={`/article/${latestPost.attributes.slug}`}>
                            <div className="card rounded border-0 shadow p-2">
                              <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                  <img src={getStrapiMedia(getLatestPostImage)} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 overflow-hidden">
                                  <div className="card-body">

                                    <p className="card-text">{latestPost.attributes.description}</p>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className='feature-post'>
                <div className='row'>

                  <h2 className='fw-bold'>Feature Posts</h2>
                  {
                    filtered.map((featureArticle,index) => {
                      console.log('featureAtricle', featureArticle)
                      const articleTime = featureArticle.attributes.updatedAt
                      const getFeaturePostImage = featureArticle.attributes.image
                      return (
                        <div className='col-12 col-md-6 col-lg-12' key={index}>
                          <Link href={`/article/${featureArticle.attributes.slug}`}>
                            <Card className='rounded border-0 shadow p-2 my-3'>

                              <Card.Img variant="top" className='img-fluid' src={getStrapiMedia(getFeaturePostImage)} />

                              <Card.Body>
                                <Card.Title>{featureArticle.attributes.title}</Card.Title>

                                <div className='clear-fix text-end'>
                                  <Moment format="MMM Do YYYY">
                                    {featureArticle.attributes.published_at}
                                  </Moment>
                                </div>

                              </Card.Body>
                            </Card>
                          </Link>
                        </div>
                      )
                    })
                  }



                </div>
              </div>
              {/* <div className='side-ad my-3'></div> */}


            </div>
            <div className="col-12 col-lg-8 shadow p-2 order-0 order-lg-1">
              <h1 className="text-center text-lg-start my-3 base-color">{article.attributes.title}</h1>
              <ReactMarkdown >{article.attributes.content}</ReactMarkdown>
              <div>
                {article.attributes.author.data.attributes.picture && (
                  <img
                    src={getStrapiMedia(
                      article.attributes.author.data.attributes.picture
                    )}
                    alt={
                      article.attributes.author.data.attributes.picture.data
                        .attributes.alternativeText
                    }
                    style={{
                      position: "static",
                      borderRadius: "20%",
                      height: 60,
                    }}
                  />
                )}
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown children={article.attributes.content} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.attributes.author.data.attributes.picture && (
                <img
                  src={getStrapiMedia(
                    article.attributes.author.data.attributes.picture
                  )}
                  alt={
                    article.attributes.author.data.attributes.picture.data
                      .attributes.alternativeText
                  }
                  style={{
                    position: "static",
                    borderRadius: "20%",
                    height: 60,
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.attributes.author.data.attributes.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">
                  {article.attributes.published_at}
                </Moment>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });
  console.log('articlesRes', articlesRes)
  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  });
  const categoriesRes = await fetchAPI("/categories");
  const allArticles = await fetchAPI("/articles", { populate: ["image", "category"] });

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes, allArticles: allArticles },
    revalidate: 1,
  };
}

export default Article;
