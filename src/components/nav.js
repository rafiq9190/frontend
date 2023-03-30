import React from "react";
import Link from "next/link";
import NextImage from 'next/legacy/image'
// import Image from 'next/image'

import logo from '../../public/logo.png'

const Nav = () => {





    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link href='/' className="navbar-brand">
                        <div className="">
                            <NextImage
                                src={logo}
                                className="img-fluid"
                                // placeholder="blur"
                                width={100}
                                height={75}
                                alt="Pet Name generator logo"
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
                        
                            <ul className="navbar-nav ms-auto links-color">

                                <li className="nav-item mx-2 my-auto">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>

                                <li className="nav-item mx-2 my-auto">
                                    <Link className="nav-link" href="#" title="Pet Age Calculator">Age Calculator</Link>
                                </li>
                                <li className="nav-item mx-2 my-auto">
                                    <Link className="nav-link" href="#" title="Pet Age Calculator">Give Away</Link>
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