import React from 'react'
import Layout from '../components/layout'
import { fetchAPI } from "../../lib/api";
import Link from 'next/link';
import Seo from "../components/seo";
import Card from 'react-bootstrap/Card';
import NextImage from 'next/legacy/image'
import { getStrapiMedia } from "../../lib/media"
function dogTraining({  articles, global }) {

  let filtered = articles.filter((article, index) => {
    if (article.attributes.category.data?.attributes.name == 'Dog Training') {
      return article
    }
  })



  return (
    <Layout>
      <Seo seo={global.attributes.seo} />

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='base-color my-5'>Dog Trainging</h1>

          </div>
          <div className='col-12 col-lg-9'>
            {
              filtered && filtered.map((article, index) => {


                const getLatestPostImage = article.attributes.image

                return (
                  <div className='col-12 col-md-6 col-lg-12 my-2' key={index}>
                    <Link href={`/article/${article.attributes.slug}`}  >
                      <div className="card rounded border-0 custom-shadow">
                        <div className="row g-0">
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
  const [articlesRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    
    


  ]);

  return {
    props: {
      articles: articlesRes.data,
    
     

    },
    // revalidate: 60,
  };

}
export default dogTraining