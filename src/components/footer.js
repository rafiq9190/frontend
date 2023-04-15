/* eslint-disable */

import React from "react"
import Link from "next/link";
import Image from "next/image"
import logoBlack from "../../public/PetLogo.png"
function footer() {

    return (
        <div className="bg-black">
            {/* <hr className="border border-color border-2 opacity-50" /> */}
            <div className="container">
                <div className="py-2">
                    <div className="row text-center">
                        <div className="col-12 col-lg-6">

                            <Link href="/">
                                <Image
                                    src={logoBlack}
                                    className="img-fluid"
                                    width={200}
                                    height={100}
                                    alt=""
                                />
                            </Link>
                            <p className="text-white fontWeight-500">Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>

                        </div>
                        <div className="col-12  col-lg-6 text-white my-auto text-center text-lg-end">
                            <h4 className="fw-bold text-white">Links</h4>
                            <ul className="list-unstyled fs-5 f-links">
                                <li><Link href="/blog" className="text-white">Blog</Link></li>
                                <li><Link href="/Privacy" className="text-white">Privacy</Link></li>

                            </ul>


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