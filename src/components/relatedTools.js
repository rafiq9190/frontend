/* eslint-disable */
import React from 'react'
import Card from 'react-bootstrap/Card';
import { getStrapiMedia } from "../../lib/media";
import Moment from "react-moment";
import Image from 'next/image'
import Link from 'next/link';
function RelatedTools({ articles }) {
    console.log('articles ', articles)
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

    console.log('filtered', filtered);
    console.log('latestPosts', latestPosts)


    return (
        <>
            <div className='container'>

                <div className='row my-5'>
                    <h1 className='my-3'>About Our <span className='base-color'>Pet Names Generator!</span></h1>
                    <div className='col-12 col-lg-9'>
                        <div className='about-container fontSize-18 container custom-shadow p-3 mb-5 rounded'>

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

                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='my-5'>
                            <div className='side-ad'></div>
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

                                                                    <p className="card-text text-truncate">{latestPost.attributes.description}</p>

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
            <div className='my-3 base-background'>
                <div className='container'>
                    <div className='row p-5'>
                        <div className='col-12'>
                            <h3 className='text-white text-center my-2'>Do You Know Your Pet Age?</h3>
                            <p className='text-white my-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing. Cras dictum tempus nunc non aliquam. Duis faucibus pellentesque elit, ac viverra massa sollicitudin a. Pellentesque enim odio, bibendum et tempor a, ornare lobortis lorem. Integer vulputate ex non venenatis imperdiet.</p>
                        </div>
                        <div className='col-12 text-center text-white my-2'><button className='bg-white base-color rounded border-0 p-2 fw-bold fs-3' title='Pet Age Calculator'>Try Free</button></div>
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-12 col-lg-9'>
                        <h1 className='my-3'>Frequently Asked <span className='base-color'>Questions</span></h1>
                        <div className='about-container fontSize-18 container custom-shadow p-3 mb-5 rounded'>

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

                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='my-5'>
                            <div className='side-ad'></div>
                        </div>

                        {/* <div className='side-ad my-3'></div> */}
                        <div className='latest-post'>
                            <h2>Feature Post</h2>
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
                    </div>
                </div>
            </div>
            <div className='base-background'>
                <div className='container'>
                    <div className='row p-5'>
                        <div className='col-12 col-md-7'>
                            <h3 className='text-white my-2'>Subscribe for Diet Plans for your lovely Pet</h3>

                        </div>
                        <div className='col-12 col-md-5 text-white my-2'><form class="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Subscribe" aria-label="Search"/>
                                <button className="btn border-white text-white" type="submit">Subscribe</button>
                        </form></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RelatedTools