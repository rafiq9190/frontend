/* eslint-disable */

import React from "react"
import Link from "next/link";
import Image from "next/image"
import logoBlack from "../../public/logo-black.png"
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
                                    width={150}
                                    height={150}
                                    alt=""
                                />
                            </Link>

                        </div>
                        <div className="col-12  col-lg-4 text-white my-auto text-center">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    {/* <h1 className="text-white fw-bold mb-4 text-lg-start d-none d-lg-block">Links</h1> */}
                                    <ul className="list-unstyled fs-5 f-links text-md-start">
                                        <li><Link href="" className="text-white">Blog</Link></li>
                                        <li><Link href="" className="text-white">Account</Link></li>
                                        <li><Link href="" className="text-white">Privacy</Link></li>
                                        <li><Link href="" className="text-white">Contact Us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6">
                                    {/* <h1 className="text-white fw-bold mb-4 tex d-none d-lg-block">Social</h1> */}
                                    <ul className="list-unstyled fs-5 f-links">
                                        <li><Link href="" className="text-white">Facebook</Link></li>
                                        <li><Link href="" className="text-white">Pintrust</Link></li>
                                        <li><Link href="" className="text-white">Twitter</Link></li>
                                        <li><Link href="" className="text-white">Instagram</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-lg-4 my-auto py-5 py-lg-0">
                            <h1 className="fw-bold text-white">Pet Name Generator</h1>
                            <p className="py-3 text-white fontWeight-500">Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            </p>
                        </div>
                        <hr className="border-color opcaity-50" />
                        <div className="row text-center text-lg-start">
                            <div className="col-12">
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