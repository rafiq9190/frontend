/* eslint-disable */

import React from "react"
import Link from "next/link";
import Image from "next/image"
import logoBlack from "../../public/logo-white.png"
function footer() {

    return (
        <div className="bg-black">
            {/* <hr className="border border-color border-2 opacity-50" /> */}
            <div className="container">
                <div className="py-5">
                    <div className="row text-center">
                        <div className="col-12 col-lg-4">

                            <Link href="/">
                                <Image
                                    src={logoBlack}
                                    className="img-fluid"
                                    width={300}
                                    height={150}
                                    alt=""
                                />
                            </Link>
                            <p></p>

                        </div>
                        <div className="col-12  col-lg-4 text-white my-auto text-center">
                            <h4 className="fw-bold text-white">Links</h4>
                            <ul className="list-unstyled fs-5 f-links">
                                <li><Link href="/blog" className="text-white">Blog</Link></li>
                                <li><Link href="/Privacy" className="text-white">Privacy</Link></li>

                            </ul>


                        </div>
                        <div className="col-12 col-lg-4 my-auto py-5 py-lg-0">
                            <h4 className="fw-bold text-white">Pet Name Generator</h4>
                            <p className="py-3 text-white fontWeight-500">Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            </p>
                        </div>
                        <hr className="border-color opcaity-50" />
                        <div className="row text-center text-lg-start">
                            <div className="col-12 col-md-6">
                                <p className="text-white">Developed by Coderix Technologies </p>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default footer