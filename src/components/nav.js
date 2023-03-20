import React from "react";
import Link from "next/link";
import NextImage from 'next/legacy/image'
// import Image from 'next/image'
import { getStrapiMedia } from "../../lib/media";
import logo from '../../public/logo.png'

const Nav = ({ logo }) => {
    console.log('logo', logo)
    const { alternativeText, height, width } = logo.data.attributes

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link href='/' className="navbar-brand">
                        <div className=" d-md-block d-lg-none">
                            <NextImage
                                src={getStrapiMedia(logo)}
                                className="img-fluid"
                                // placeholder="blur"
                                width={width}
                                height={height}
                                alt={alternativeText}
                                
                            />

                        </div>

                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav m-auto links-color">

                            <li className="nav-item mx-2 my-auto">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-2 my-auto">
                                <a className="nav-link" href="#">Free Tools</a>
                            </li>
                            <li className="nav-item">
                                <div className=" d-none d-lg-block">
                                    <NextImage
                                        src={getStrapiMedia(logo)}
                                        className="img-fluid "
                                        width={100}
                                        height={75}
                                        alt={alternativeText}
                                        
                                    />

                                </div>
                            </li>

                            <li className="nav-item dropdown mx-2 my-auto">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2 my-auto">
                                <a className="nav-link" href="#">Find us</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav >
            <div className="border-divider"></div>

        </div >
    );
};

export default Nav;