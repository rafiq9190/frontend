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

    let filtered = articles.filter((article, index) => {
        if (article.attributes.category.data?.attributes.name == 'feature') {
            return article
        }
    })
    let latestPosts = articles.filter((article) => {
        if (article.attributes.category.data?.attributes.name == 'LatestPosts') {
            return article
        }
    })


    return (
        <Layout>
            <Seo seo={blog.attributes.seo} />
            <div className='container'>
                <div className='row'>
                    <div className='col-2'>
                        <div className='large-screen-ad'></div>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <div className="row">
                            <div className='col-12  my-3'>
                                <h1 className='base-color'>Features</h1>
                            </div>
                            {
                                filtered.map((featureArticle, index) => {
                                    const getFeaturePostImage = featureArticle.attributes.image
                                    return (
                                        <div className='col-12 col-md-6 col-lg-4 mb-3' key={index} >
                                            <Link href={`/article/${featureArticle.attributes.slug}`}>
                                                <Card className='rounded border-0 custom-shadow p-1'>


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
                                                        <Card.Title className=' text-truncate'>{featureArticle.attributes.title}</Card.Title>
                                                        <Card.Text className=' text-truncate'>
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
                    <div className='col-2'><div className='large-screen-ad'></div></div>
                </div>
                <h1 className='text-center my-5'>Related <span className='backgroundColor base-color rounded px-2'>Atricles</span></h1>
                <div className='row'>
                    <div className='col-12 col-lg-3 order-1 order-lg-0 my-3'>
                        <div className='latest-post'>
                            <h2>Latest Post</h2>
                            <div className='row'>
                                {
                                    latestPosts && latestPosts.map((latestPost, index) => {


                                        const getLatestPostImage = latestPost.attributes.image

                                        return (
                                            <div className='col-12 col-md-6 col-lg-12 my-2'>
                                                <Link href={`/article/${latestPost.attributes.slug}`}>
                                                    <div className="card rounded border-0 p-1 custom-shadow" key={index}>
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-4">
                                                                <NextImage
                                                                    src={getStrapiMedia(getLatestPostImage)}
                                                                    width={400}
                                                                    height={200}
                                                                    className="img-fluid rounded-start"
                                                                    alt={getLatestPostImage.data.attributes.alternativeText
                                                                    }
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
                    </div>
                    <div className='col-12 col-lg-9 order-0 order-lg-1 my-3'>
                        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3'>
                            {
                                articles.map((article, index) => {
                                    const getFeaturePostImage = article.attributes.image
                                    return (
                                        <div className='col' key={index}>
                                            <Link href={`/article/${article.attributes.slug}`}>
                                                <Card className='rounded border-0 custom-shadow'>


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
                                                        <Card.Title className='text-truncate'>{article.attributes.title}</Card.Title>
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

                seo: { populate: "*" },
            },
        }),


    ]);

    return {
        props: {
            articles: articlesRes.data,
            blog: blogpageRes.data,

        },
        // revalidate: 60,
    };

}


export default blog