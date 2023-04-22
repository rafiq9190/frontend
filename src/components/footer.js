/* eslint-disable */

import React from "react"
import Link from "next/link";
import Image from "next/image"
import logoWhite from "../../public/footerLogo.png"
function footer() {

    return (
        <div className="bg-black">
            {/* <hr className="border border-color border-2 opacity-50" /> */}
            <div className="container">
                <div className="py-2">
                    <div className="row text-center">
                        <div className="col-12 col-lg-7 m-auto">
                            <div className="row">
                                <div className="col-12">
                                    <div className="my-3">
                                        <Link href="/">
                                            <Image
                                                src={logoWhite}
                                                className="img-fluid"
                                                width={200}
                                                height={100}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="my-3">
                                        <ul className="nav justify-content-center f-links">
                                            <li className="nav-item">
                                                <Link className="nav-link active text-white" aria-current="page" href="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" href="/blog">
                                                    Blog
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white " href="/privacy">
                                                    Privacy
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-white" href="/about">About</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="my-2">
                                        <span><Link href=""><i className="fa fa-facebook-official text-white fs-4 px-2" aria-hidden="true"></i></Link></span>
                                        <span><Link href=""><i className="fa fa-instagram text-white fs-4 px-2" aria-hidden="true"></i></Link></span>
                                        <span><Link href=""><i className="fa fa-pinterest text-white fs-4 px-2" aria-hidden="true"></i></Link></span>
                                    </div>

                                </div>
                            </div>




                        </div>



                    </div>
                </div>

            </div>
            <hr className="border-color opcaity-50" />
            <div className="row text-center  g-0">
                <div className="col-12">
                    <p className="text-white">Developed by Coderix Technologies </p>
                </div>

            </div>
        </div>
    )
}

export default footer