import Moment from "react-moment";
import ReactMarkdown from "react-markdown";
import ReactHtmlParser from "react-html-parser";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Card from 'react-bootstrap/Card';

import { fetchAPI } from "../../../lib/api";
import { getStrapiMedia } from "../../../lib/media";
import NextImage from 'next/legacy/image'

const Article = ({ article, categories, allArticles }) => {
 

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
  let { width, height, alternativeText } = article.attributes.image.data.attributes
  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="container">
        <div className='row'>

          <div className="col-12 col-lg-9">
            <h1 className="text-center my-3 base-color" style={{ fontSize: "4rem" }}>Blog</h1>
            <div className="my-4">
              <NextImage
                // loader={myLoader}
                src={imageUrl}
                width={width}
                height={height}
                layout='responsive'
                className="img-fluid rounded-start"
                placeholder="blurDataURL"
                alt={alternativeText} />
            </div>
            <h1 className="text-center text-lg-start my-3 base-color">{article.attributes.title}</h1>

            <div className="fontSize-18">{ReactHtmlParser(article.attributes.content)}
            </div>
            <h1 className='text-center my-5'>Related <span className=' base-color rounded px-2'>Atricles</span></h1>
            <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3'>
              {
                allArticles.data.map((article, index) => {
                  const getFeaturePostImage = article.attributes.image
                  const {width, height,alternativeText}=article.attributes.image.data.attributes
                  return (
                    <div className='col' key={index}>
                      <Link href={`/article/${article.attributes.slug}`}>
                        <Card className='rounded border-0 custom-shadow'>


                          <NextImage
                            // loader={myLoader}
                            src={getStrapiMedia(getFeaturePostImage)}
                            width={width}
                            height={height}
                            layout='responsive'
                            className="rounded"
                            placeholder="blurDataURL"
                            alt={alternativeText} />


                          <Card.Body>
                            <Card.Title className='text-truncate' title={article.attributes.title}>{article.attributes.title}</Card.Title>
                            <Card.Text className='text-truncate'>
                              {article.attributes.description}
                            </Card.Text>

                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  )
                })
              }
            </div>

          </div>
          <div className='col-12 col-lg-3 my-3'>
            <div className="position-sticky" style={{ top: "10px" }}>
              <div className="side-ad my-3"></div>

              {/* <div >
                <p className='fs-3 font-weight-500 base-color'>Popular Categories</p>
                <ul className='fs-5 font-weight-500 language '>
                  <li>
                    <Link className='language-list' href="/">Dog Training</Link>
                  </li>
                  <li>
                    <Link className='language-list' href="/chinese">Supplies</Link>
                  </li>
                  <li>
                    <Link className='language-list' href="/japanese">Pet Safety</Link></li>
                  <li>
                    <Link className='language-list' href="/french">Home Cleaning</Link>
                  </li>

                </ul>
              </div> */}
              <h1 className='my-3 base-color'>Latest Posts</h1>
              {
                allArticles && allArticles.data.map((article, index) => {


                  const getLatestPostImage = article.attributes.image

                  return (
                    <div className='col-12 col-md-6 col-lg-12 my-2' key={index}>
                      <Link href={`/article/${article.attributes.slug}`}  >
                        <div className="card rounded border-0 custom-shadow">
                          <div className="row g-0">
                            <div className="col-md-4">
                              <NextImage
                                src={getStrapiMedia(getLatestPostImage)}
                                width={getLatestPostImage.data.attributes.width}
                                height={getLatestPostImage.data.attributes.height}
                                className="img-fluid rounded-start"
                                alt={getLatestPostImage.data.attributes.alternativeText
                                }
                              />
                            </div>
                            <div className="col-md-8 overflow-hidden">
                              <div className="card-body">
                                <p className="card-text text-truncate fontWeight-500 base-color">{article.attributes.title}</p>
                                

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

        </div>
      </div>
      {/* <div className="col-12 col-lg-4">
              <div className='latest-post my-4'>
                <h2>Latest Post</h2>
                <div className='row'>
                  {
                    latestPosts && latestPosts.map((latestPost, index) => {


                      const getLatestPostImage = latestPost.attributes.image
                      const { width, height, alternativeText } = getLatestPostImage.data.attributes
                      return (
                        <div className='col-12 col-md-6 col-lg-12 my-2' key={index}>
                          <Link href={`/article/${latestPost.attributes.slug}`}>
                            <div className="card rounded border-0 shadow p-2">
                              <div className="row g-0 align-items-center">
                                <div className="col-md-4">
                                  <NextImage
                                    src={getStrapiMedia(getLatestPostImage)}
                                    className="img-fluid rounded-start"
                                    alt={alternativeText}
                                    width={width}
                                    height={height}
                                  />

                                </div>
                                <div className="col-md-8 overflow-hidden">
                                  <div className="card-body p-1">

                                    <p className="card-text text-truncate font-weight-600">{latestPost.attributes.description}</p>

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
                    filtered.map((featureArticle, index) => {

                      const articleTime = featureArticle.attributes.updatedAt
                      const getFeaturePostImage = featureArticle.attributes.image
                      const { width, height, alternativeText } = getFeaturePostImage.data.attributes
                      return (
                        <div className='col-12 col-md-6 col-lg-12' key={index}>
                          <Link href={`/article/${featureArticle.attributes.slug}`}>
                            <Card className='rounded border-0 shadow p-2 my-3'>

                              <NextImage
                                className='img-fluid'
                                src={getStrapiMedia(getFeaturePostImage)}
                                alt={alternativeText}
                                width={width}
                                height={height}
                              />

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
              <div className='side-ad my-3'></div>


            </div> */}
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
    revalidate: 10,
  };
}

export default Article;
