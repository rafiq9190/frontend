import React, { useState } from 'react'
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../../lib/api";
import Card from 'react-bootstrap/Card';
import NextImage from 'next/legacy/image'
import { getStrapiMedia } from "../../lib/media";
import Button from 'react-bootstrap/Button';
import Link from 'next/link'


function blog({ articles, blog }) {
    console.log('articles blog',articles)
    let filtered = articles.filter((article, index) => {
        if (article.attributes.category.data?.attributes.name == 'feature') {
            return article
        }
    })
    let letestPost = articles.filter((article, index) => {
        if (article.attributes.category.data?.attributes.name == "Latest Posts") {
            return article
        }
    })


    return (
        <Layout>
            <Seo seo={blog.attributes.seo} />
            <div className='container'>
                <div className='row'>
                    <div className='col-2 d-none d-lg-block' style={{ backgroundColor: "#d9d9d9" }}>

                    </div>
                    <div className='col-12 col-lg-8'>
                        <div className="row">
                            <div className='col-12 text-center my-5'>
                                <h1>Features</h1>
                            </div>
                            {
                                filtered.map((featureArticle, index) => {
                                    const getFeaturePostImage = featureArticle.attributes.image
                                    return (
                                        <div className='col' key={index}>
                                            <Link href={`/article/${featureArticle.attributes.slug}`}>
                                                <Card className='rounded border-0'>


                                                    <NextImage
                                                        // loader={myLoader}
                                                        src={getStrapiMedia(getFeaturePostImage)}
                                                        width={200}
                                                        height={150}
                                                        layout='responsive'
                                                        className="rounded"
                                                        placeholder="blurDataURL"
                                                        alt="" />


                                                    <Card.Body>
                                                        <Card.Title>{featureArticle.attributes.title}</Card.Title>
                                                        <Card.Text className='fs-5'>
                                                            {featureArticle.attributes.description}
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
                    <div className='col-2  d-none d-lg-block' style={{ backgroundColor: "#d9d9d9" }}></div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center my-5'>
                        <h1 className='text-start'>Popular Atricles</h1>
                    </div>
                    <div className="col-12">
                        <div className="row">

                            {
                                articles.map((featureArticle, index) => {
                                    const getAtriclesImage = featureArticle.attributes.image
                                    return (
                                        <div className='col-12 col-md-6 col-lg-4' key={index}>
                                            <Link href={`/article/${featureArticle.attributes.slug}`}>
                                                <Card className='rounded border-0'>


                                                    <NextImage
                                                        // loader={myLoader}
                                                        src={getStrapiMedia(getAtriclesImage)}
                                                        width={100}
                                                        height={100}
                                                        layout='responsive'
                                                        className="rounded"
                                                        placeholder="blurDataURL"
                                                        alt="" />


                                                    <Card.Body>
                                                        <Card.Title>{featureArticle.attributes.title}</Card.Title>
                                                        <Card.Text className='fs-5'>
                                                            {featureArticle.attributes.description}
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

                </div>
            </div>

        </Layout>
    )
}
export async function getServerSideProps({ req, res }) {
    // Run API calls in parallel
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
    const [articlesRes, blogpageRes] = await Promise.all([
      fetchAPI("/articles", { populate: ["image", "category"] }),
      fetchAPI("/blog", {
        populate: {
          hero: "*",
          seo: { populate: "*" },
        },
      }),
      
      
    ]);
  
    return {
      props: {
        articles: articlesRes.data,
        blogpage: blogpageRes.data,
  
      },
      // revalidate: 60,
    };
  
  }

export default blog