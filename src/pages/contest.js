import Layout from '../components/layout'
import React, { useState } from 'react'
import Link from 'next/link'
import Seo from '../components/seo'
import Card from 'react-bootstrap/Card';
import NextImage from 'next/legacy/image'
import Button from 'react-bootstrap/Button';
import InstructionModal from '../components/instructionModal'
import { getStrapiMedia } from "../../lib/media";
function contest() {
    



    return (
        <Layout>
            <Seo />
            <div className='container'>
                <div className='row'>

                    <div className='col-12'>
                        <h1 className='my-3 text-center'>Pet Contest <span className='backgroundColor base-color rounded px-2'>Winners</span></h1>
                        <p className='text-center mb-3'>pet competition winner with the different amount </p>
                        <div>
                            <div className="row">



                                <div className='col-12 col-md-6 col-lg-4 mb-3' key="" >
                                    <Link href={`/article/`}>

                                        <Card className='rounded border-0 custom-shadow p-1'>
                                            <NextImage
                                                // loader={myLoader}
                                                src=''
                                                width={200}
                                                height={150}
                                                layout='responsive'
                                                className="rounded"
                                                placeholder="blurDataURL"
                                                alt="" />


                                            <Card.Body>
                                                <Card.Title className=' text-truncate base-color' >1st Prize Winner</Card.Title>
                                                <Card.Text className=' text-truncate'>
                                                    The contest winner in the time period are
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 mb-3 ' key="" >
                                    <Link href={`/article/`}>
                                        <Card className='rounded border-0 custom-shadow p-1'>
                                            <NextImage
                                                // loader={myLoader}
                                                src=''
                                                width={200}
                                                height={150}
                                                layout='responsive'
                                                className="rounded"
                                                placeholder="blurDataURL"
                                                alt="" />


                                            <Card.Body>
                                                <Card.Title className=' text-truncate base-color' >2st Prize Winner</Card.Title>
                                                <Card.Text className=' text-truncate'>
                                                    The contest winner in the time period are
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 mb-3' key="" >
                                    <Link href={`/article/`}>
                                        <Card className='rounded border-0 custom-shadow p-1'>
                                            <NextImage
                                                // loader={myLoader}
                                                src=''
                                                width={200}
                                                height={150}
                                                layout='responsive'
                                                className="rounded"
                                                placeholder="blurDataURL"
                                                alt="" />


                                            <Card.Body>
                                                <Card.Title className=' text-truncate base-color' >3rd Prize Winner</Card.Title>
                                                <Card.Text className=' text-truncate'>
                                                    The contest winner in the time period are
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                                <div className='col-12 text-center'>
                                    <Link href='/createContest'>
                                        <button className='tool-name-btn base-color font-weight-500 my-2 background-color text-truncate m-auto fs-4 ' title='Chance to Win 100$' >
                                            Let! Start Pet Contest
                                        </button>
                                    </Link>
                                </div>
                                {/* <InstructionModal
                                    open={handleShow}

                                /> */}




                            </div>
                        </div>
                    </div>

                </div>
                <div className='row my-3'>
                    <div className='col-12 col-md-9'>
                        <input type='search' placeholder='Search Here' />
                        <div className="row my-2">



                            <div className='col-12 col-md-6 mb-3' key="" >
                                <Card className="text-center text-lg-start custom-shadow">
                                    <Card.Header className=' backgroundColor clear-fix ' style={{ fontSize: '14px' }}><div style={{ width: "30px", height: "30px" }} className='bg-dark circle d-inline-block'></div><span className='px-2 my-auto'>User Name</span> <span className='float-end'>Last Seen by:2 days ago</span></Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    <Card.Footer className='backgroundColor clear-fix'><span className='base-color fw-bold'>Votes:10</span><span></span> <span className="float-end"><span className='px-3'>Share with Friends:</span><i class="fa fa-facebook base-color" aria-hidden="true"></i> <i class="fa fa-instagram base-color px-3" aria-hidden="true"></i><i class="fa fa-pinterest-p base-color" aria-hidden="true"></i></span></Card.Footer>
                                </Card>
                            </div>
                            <div className='col-12 col-md-6 mb-3 ' key="" >
                                <Card className="text-center text-lg-start">
                                    <Card.Header className=' backgroundColor clear-fix ' style={{ fontSize: '14px' }}><div style={{ width: "30px", height: "30px" }} className='bg-dark circle d-inline-block'></div><span className='px-2 my-auto'>User Name</span> <span className='float-end'>Last Seen by:2 days ago</span></Card.Header>
                                    <Card.Body>
                                        <Card.Title>Special title treatment</Card.Title>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                    <Card.Footer className=' backgroundColor clear-fix'><span className='base-color fw-bold'>Votes:10</span><span></span> <span className="float-end"><span className='px-3'>Share with Friends:</span><i class="fa fa-facebook base-color" aria-hidden="true"></i> <i class="fa fa-instagram base-color px-3" aria-hidden="true"></i><i class="fa fa-pinterest-p base-color" aria-hidden="true"></i></span></Card.Footer>
                                </Card>
                            </div>






                        </div>
                    </div>
                    <div className='col-12 d-none d-lg-block'>
                        <div className='large-screen-ad'></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default contest