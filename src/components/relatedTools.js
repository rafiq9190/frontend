/* eslint-disable */
import React from 'react'
import Card from 'react-bootstrap/Card';
import { getStrapiMedia } from "../../lib/media";
import Moment from "react-moment";
import Image from 'next/image'
import Link from 'next/link';
function RelatedTools({ articles }) {
    let filtered = articles.filter((article) => {
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
        <>
            <div className='container'>

                <div className='row my-5'>
                    <div className='col-12 col-lg-9'>
                        <h1 className='my-3'>About Our <span className='base-color'>Pet Names Generator!</span></h1>
                        <div className='about-container fontSize-18 container shadow p-3 mb-5 rounded'>

                            {/* <h1>How To Use Our Pet Name Generator?</h1> */}


                            {/* <h1>Why are Dog Names Important?</h1> */}
                            <p> Adopting a pet is easy but bearing the responsibilities of having a pet can be challenging and difficult.Preparing and providing your pet with basic necessities such as a comfortable bed, healthy food and other supplies should be your first priority!  Choosing an easy and creative pet name for your new furry little friend should be secondary but still important.
                                Dogs and cats, unlike other pets, require unique names as they obey and listen to your instructions based on some short and creative names you can give them. Therefore, naming your pets will be helpful in the long-run for both of you.
                                It is suggested to name your pet as soon as you adopt him to develop a habit of calling him by his name. This helps him to understand and follow your commands easily during any training sessions or obedience classes. pet-name-generator
                                Tips To Choose A Pet Name Although choosing a pet name is totally up to you and purely your preference, it can be difficult to find the perfect pet name.  To help you with unique pet name ideas, here are some tips to help you with choosing a perfect pet name for your friend.
                                Choose a short but creative name that your dog and others will love
                                Do not confuse your pet by changing the name quite often.</p>
                            <p>Never select names rhyming with common pet commands such as sit, walk, run. It would confuse the dog with commands!
                                Try to choose names with hard consonants such as “T” and “K” which are easy to distinguish for your dog
                                When you’ve chosen the perfect name for your pet, call him as much as you can by his name
                                Some pet owners prefer funny names over boring logical names, but make sure the name doesn’t sound insulting or abusive to the dog
                                Already have a dog?  If you are looking to find out how old your dog is use our free Dog Age Calculator tool:  Dog Age Calculator

                                Happy searching!</p>
                        </div>
                        <h1 className='my-3'>Frequently Asked Question About <span className='base-color'>Pet Names Generator!</span></h1>
                        <div className='faq-container fontSize-18 container shadow bg-body  p-3 mb-5 rounded'>
                            Answer 1:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                            Answer 2:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                            Answer 3:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                            Answer 4:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                            Answer 5:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                            Answer 6:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                            Answer 7:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                            Answer 8:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.

                            Answer 9:
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                        </div>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='my-5'>
                            <div className='side-ad'></div>
                        </div>
                        <div className='feature-post'>
                            <div className='row'>

                                <h2 className='fw-bold'>Feature Posts</h2>
                                {
                                    filtered.map((featureArticle, index) => {
                                        // console.log('featureAtricle', featureArticle)
                                        const articleTime = featureArticle.attributes.updatedAt
                                        const getFeaturePostImage = featureArticle.attributes.image
                                        const { alternativeText, width, height } = getFeaturePostImage.data.attributes
                                        return (
                                            <div className='col-12 col-md-6 col-lg-12'>
                                                <Link href={`/article/${featureArticle.attributes.slug}`}>
                                                    <Card className='rounded border-0 shadow p-2 my-3' key={index}>

                                                        <Image className='img-fluid' src={getStrapiMedia(getFeaturePostImage)} width={width} height={height} alt={alternativeText} />

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
                        <div className='latest-post'>
                            <h2>Latest Post</h2>
                            <div className='row'>
                                {
                                    latestPosts && latestPosts.map((latestPost, index) => {


                                        const getLatestPostImage = latestPost.attributes.image

                                        return (
                                            <div className='col-12 col-md-6 col-lg-12 my-2'>
                                                <Link href={`/article/${latestPost.attributes.slug}`}>
                                                    <div className="card rounded border-0 shadow p-2" key={index}>
                                                        <div className="row g-0 align-items-center">
                                                            <div className="col-md-4">
                                                                <Image src={getStrapiMedia(getLatestPostImage)} width={400} height={200} className="img-fluid rounded-start" alt={getLatestPostImage.data.attributes.alternativeText
                                                                } />
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedTools