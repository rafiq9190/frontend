import React from "react";
import Link from "next/link";

import { getStrapiMedia } from "../../lib/media";
import NextImage from 'next/legacy/image'

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const Card = ({ article }) => {
    
    const getImage = article.attributes.image
    const { alternativeText, width, height } = article.attributes.image.data.attributes;

    return (
        <div className="container">
            <Link href={`/article/${article.attributes.slug}`} legacyBehavior>
                <div className="card mb-3" style={{ maxWidth: '740px' }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <NextImage
                                // loader={myLoader}
                                src={getStrapiMedia(getImage)}
                                width={width}
                                height={height}
                                layout='responsive'
                                className="img-fluid rounded-start"
                                placeholder="blurDataURL"
                                alt={alternativeText} />

                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{article.attributes.title}</h5>
                                <p className="card-text">{article.attributes.description}</p>
                                {/* <p className="badge badge-warning bg-warning badge">{article.attributes.category.data}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <NextImage image={article.attributes.image} />
                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase">
                            {article.attributes.category.data.attributes.name}
                        </p>
                        <p id="title" className="uk-text-large">
                            {article.attributes.title}
                        </p>
                    </div>
                </div>
            </div> */}
            </Link>
        </div>
    );
};

export default Card;