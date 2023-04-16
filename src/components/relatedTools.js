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

                <div className='row'>
                    <h1 className='my-3'>About Our <span className='base-color'>Pet Names Generator!</span></h1>
                    <div className='col-12 col-lg-9'>
                        <div className='about-container fontSize-18 container custom-shadow p-3 mb-5 rounded'>
                           <p> Welcome to Pet Names Generators, the ultimate destination for generating unique and creative names for your beloved pets. Our pet names generator tool offers many ideas for dogs, cats, birds, fish, and other pets.</p>

                          <p>  With our pet names generator tool, you can quickly generate cute, funny, and creative pet names for your pet. Our tool offers a variety of categories to choose from, including gender-specific pet names, breed-specific pet names, character-inspired pet names, and animal-inspired pet names.
                            Our pet names generator tool uses advanced algorithms to generate unique and creative pet names. Enter your pet's information, such as gender and breed, and our tool will generate a list of potential pet names for you to choose from.
                            In addition, our pet names generator blog provides pet name ideas, trends, and inspiration for pet owners. Our blog is updated regularly with new and exciting pet name ideas for all types of pets.
                            Choosing the perfect name for your pet is essential, so we're here to help. Our pet names generator tool and blog are designed to make finding the perfect pet name fun and easy.</p>
                            <p className='fw-bold'>Try our pet names generator tool today and give your pet the perfect name they deserve!</p>
                            <p className='fw-bold base-color'>Conclusion:</p>
                            <p>Pet Names Generators is your one-stop destination for generating unique and creative pet names. With our pet names generator tool and blog, you can quickly generate pet name ideas and stay up-to-date on the latest pet name trends. Try our pet names generator tool today and give your pet the perfect name they deserve!</p>

                        </div>

                    </div>
                    <div className='col-12 col-lg-3'>

                        <div className='latest-post'>
                            {/* <h2>Related Tool</h2>
                            <Link href="/DogAgeCalculator"><button className='tool-name-btn base-color font-weight-500 my-2 background-color text-truncate m-auto' title='Dog Age Calculator'>Dog Age Calculator</button></Link> */}
                            <h2>Latest Posts</h2>
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
                                                                <Image
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

                                                                    <p className="card-text text-truncate ">{latestPost.attributes.description}</p>

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

                        {/* <div className='side-ad my-3'></div> */}

                    </div>
                </div>



                <div className='row'>
                    <div className='col-12 col-lg-9'>

                        <h1 className='my-3'>Dog Related Articles</h1>
                        {
                            articles && articles.map((article, index) => {


                                const getLatestPostImage = article.attributes.image

                                return (
                                    <div className='col-12 col-md-6 col-lg-12 my-2'>
                                        <Link href={`/article/${article.attributes.slug}`}>
                                            <div className="card rounded border-0 custom-shadow" key={index}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <Image
                                                            src={getStrapiMedia(getLatestPostImage)}
                                                            width={400}
                                                            height={200}
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
                    <div className='col-12 col-lg-3'>

                        <div className='my-5'>
                            <div className='side-ad'></div>
                            <div className='side-ad my-5'></div>
                        </div>
                        {/* <div className='side-ad my-3'></div> */}

                    </div>
                </div>
            </div>
            {/* <div className='base-background'>
                <div className='container'>
                    <div className='row p-5'>
                        <div className='col-12'>
                            <h3 className='text-white text-center my-2'>Do You Know Your Pet Age?</h3>
                            <p className='text-white my-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing. Cras dictum tempus nunc non aliquam. Duis faucibus pellentesque elit, ac viverra massa sollicitudin a. Pellentesque enim odio, bibendum et tempor a, ornare lobortis lorem. Integer vulputate ex non venenatis imperdiet.</p>
                        </div>
                        <div className='col-12 text-center text-white my-2'>
                            <Link href="/DogAgeCalculator"><button className='bg-white base-color rounded border-0 p-2 fw-bold fs-3' title='Dog Age Calculator'>Try It For Free</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div> */}
        </>
    )
}

export default RelatedTools