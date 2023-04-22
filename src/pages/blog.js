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
        if (article.attributes.category.data?.attributes.name == 'Feature') {
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

                    <div className='col-12 col-lg-9'>
                        <div className="row">
                            <div className='col-12  my-3'>
                                <h1 className='base-color'>Features</h1>
                            </div>
                            {
                                filtered.map((featureArticle, index) => {
                                    const getFeaturePostImage = featureArticle.attributes.image
                                    const {width, height,alternativeText}=featureArticle.attributes.image.data.attributes
                                    return (
                                        <div className='col-12 col-md-6 col-lg-4 mb-3' key={index} >
                                            <Link href={`/article/${featureArticle.attributes.slug}`}>
                                                <Card className='rounded border-0 custom-shadow p-1'>
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
                                                        <Card.Title className=' text-truncate ' >{featureArticle.attributes.title}</Card.Title>
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
                        <h1 className='my-5'>Related <span className=' base-color rounded px-2'>Atricles</span></h1>
                        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3'>
                            {
                                articles && articles.map((article, index) => {
                                    const getLatestPostImage = article.attributes.image
                                    const {width, height}=article.attributes.image.data.attributes
                                    return (
                                        <div className='col-12 col-md-6 col-lg-12 my-2' key={index}>
                                            <Link href={`/article/${article.attributes.slug}`}  >
                                                <div className="card rounded border-0 custom-shadow">
                                                    <div className="row g-0">
                                                        <div className="col-md-4">
                                                            <NextImage
                                                                src={getStrapiMedia(getLatestPostImage)}
                                                                width={width}
                                                                height={height}
                                                                className="img-fluid rounded-start"
                                                                alt={getLatestPostImage.data.attributes.alternativeText
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-md-8 overflow-hidden">
                                                            <div className="card-body">
                                                                <p className="card-text text-truncate fw-bold base-color fs-5">{article.attributes.title}</p>
                                                                <p className="card-text">{article.attributes.description}</p>

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
                    <div className='col-12 col-lg-3'>
                        <div className='position-sticky' style={{ top: "10px" }}>
                            <div className="side-ad my-3"></div>

                            <div >
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
                            </div>
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