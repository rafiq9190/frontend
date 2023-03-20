import React from 'react'
import NextImage from 'next/legacy/image'
import { getStrapiMedia } from "../../lib/media";
function features({ homepage }) {
    const getFirstFeatureIamge = homepage.attributes.featureSection.featureImage
    const getSecondFeatureImage = homepage.attributes.feature2.featureImage
    const getThirdFeatureImage = homepage.attributes.feature3.featureImage
    const getForthFeatureImage = homepage.attributes.feature4.featureImage
    return (
        <section className='' style={{ backgroundColor: '#d9d9d926' }}>
            <div className='container'>
                <div className='row'>
                    <h1 className='mt-5 text-center'>Pet Names Generator <span className='rounded' style={{ backgroundColor: '#8338ec', color: '#fff', padding: '0.5rem', lineHeight: '74px' }}>Features</span> </h1>
                    <div className='col-12 col-md-6 text-center text-md-start my-auto'>
                        <h2 className=''>{homepage.attributes.featureSection.featureHeading}</h2>
                        <p className='feature-para'>{homepage.attributes.featureSection.featureDesc}</p>

                    </div>
                    <div className='col-12 col-md-6 text-center text-md-start'>
                        <NextImage
                            // loader={myLoader}
                            src={getStrapiMedia(getFirstFeatureIamge)}
                            width={200}
                            height={200}
                            layout='responsive'
                            className=""
                            placeholder="blurDataURL"
                            alt="" />
                    </div>

                </div>
                <div>
                    <div className='row'>
                        <div className='col-12 col-md-6 text-center text-md-start order-1 order-md-0'>
                            <NextImage
                                // loader={myLoader}
                                src={getStrapiMedia(getSecondFeatureImage)}
                                width={200}
                                height={200}
                                layout='responsive'
                                className=""
                                placeholder="blurDataURL"
                                alt="" />
                        </div>
                        <div className='col-12 col-md-6 text-center text-md-start my-auto order-0 order-md-1'>
                            <h2 className=''>{homepage.attributes.feature2.featureHeading}</h2>
                            <p className='feature-para'>{homepage.attributes.feature2.featureDesc}</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className='row'>
                        <div className='col-12 col-md-6 text-center text-md-start my-auto'>
                            <h2 className=''>{homepage.attributes.feature3.featureHeading}</h2>
                            <p className='feature-para'>{homepage.attributes.feature3.featureDesc}</p>

                        </div>
                        <div className='col-12 col-md-6 text-center text-md-start'>
                            <NextImage
                                // loader={myLoader}
                                src={getStrapiMedia(getThirdFeatureImage)}
                                width={200}
                                height={200}
                                layout='responsive'
                                className=""
                                placeholder="blurDataURL"
                                alt="" />
                        </div>

                    </div>
                </div>
                <div>
                    <div className='row'>
                        <div className='col-12 col-md-6 text-center text-md-start order-1 order-md-0'>
                            <NextImage
                                // loader={myLoader}
                                src={getStrapiMedia(getForthFeatureImage)}
                                width={200}
                                height={200}
                                layout='responsive'
                                className=""
                                placeholder="blurDataURL"
                                alt="" />
                        </div>
                        <div className='col-12 col-md-6 text-center text-md-start my-auto order-0 order-md-1'>
                            <h2 className=''>{homepage.attributes.feature4.featureHeading}</h2>
                            <p className='feature-para'>{homepage.attributes.feature4.featureDesc}</p>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default features