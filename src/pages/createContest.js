import Layout from '../components/layout'
import React from 'react'
import Link from 'next/link'

function createContest() {
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-2 d-none d-lg-block'>
                        <div className='large-screen-ad'></div>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <h2 className='my-3 text-center'>How to Win Pet Contest</h2>
                        <p className='text-center'>Cat and Dog contest online to win 100$</p>
                        <p className='fs-5 base-color fw-bold'>Instractions:-</p>
                        <div className='px-2'><i className="fa fa-hand-o-right base-color px-2" aria-hidden="true"></i>Follow the <Link href="https://www.facebook.com/profile.php?id=100091416975606" target="_blank"><span className='base-color'>Facebook Page</span></Link> </div>
                        <div className='px-2'><i className="fa fa-hand-o-right base-color px-2" aria-hidden="true"></i>Follow the <Link href="https://www.facebook.com/profile.php?id=100091416975606" target="_blank"><span className='base-color'>Instagram</span></Link> </div>
                        <div className='px-2'><i className="fa fa-hand-o-right base-color px-2" aria-hidden="true"></i>Follow the <Link href="https://www.facebook.com/profile.php?id=100091416975606" target="_blank"><span className='base-color'>Pinterest</span></Link> </div>
                        <p className='fs-5 fw-bold base-color'>Targets:</p>
                        <p>Collects the more Votes from your social circles</p>
                        <p>First 3 Winners Choose to Win contest according to their votes</p>
                        <p>Those member are not able to win can rejoin competition but next time you will pay 1$ as a contest fee</p>
                        <p>Those who Win the contest is not able to rejoin the contest for One year</p>
                        <div className='text-center'>
                            <button className='tool-name-btn base-color font-weight-500 my-2 background-color text-truncate m-auto fs-3' title='Chance to Win 100$' >
                                Register
                            </button>
                        </div>
                    </div>
                    <div className='col-2 d-none d-lg-block'>
                        <div className='large-screen-ad'></div>
                    </div>

                </div>
                <div className='row my-3'>
                    <div className='col-12 col-lg-8 custom-shadow rounded'>
                        <h1 className='my-3'>How to Win contest</h1>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <h4 className='base-color'>Reviews</h4>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default createContest