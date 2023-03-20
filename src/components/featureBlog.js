import React from "react"
import Card from "react-bootstrap/Card";
import NextImage from "next/legacy/image"
import { getStrapiMedia } from "../../lib/media";
import Button from "react-bootstrap/Button";
import Link from "next/link"

function featureBlog({ articles }) {

    let filtered = articles.filter((article, index) => {
        if (article.attributes.category.data?.attributes.name == "feature") {
            return article
        }
    })


    return (
        <section style={{ backgroundColor: "#d9d9d926" }}>
            <div className="container my-5">
                <div className="row g-3">
                    <div className="col-12 text-center my-5">
                        <h1> Checout to Our  <span className="rounded" style={{ backgroundColor: "#8338ec", color: "#fff", padding: "0.5rem", lineHeight: "74px" }}>Blog</span></h1>
                    </div>
                    {
                        filtered.map((featureArticle, index) => {
                            const getFeaturePostImage = featureArticle.attributes.image
                            return (
                                <div className="col-12 col-md-6 col-lg-4 " key={index}>
                                    <Link href={`/article/${featureArticle.attributes.slug}`} >
                                        <Card className="rounded border-0" >


                                            <NextImage
                                                // loader={myLoader}
                                                src={getStrapiMedia(getFeaturePostImage)}
                                                width={200}
                                                height={150}
                                                layout="responsive"
                                                className="rounded"
                                                placeholder="blurDataURL"
                                                alt="" />


                                            <Card.Body>
                                                <Card.Title>{featureArticle.attributes.title}</Card.Title>
                                                <Card.Text className="fs-5">
                                                    {featureArticle.attributes.description}
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            )
                        })
                    }


                    <div className="col-12 text-center">
                        <Button variant="info"><Link href="/blog">See More</Link></Button>{" "}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default featureBlog