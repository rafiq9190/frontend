import React from "react";
import Link from "next/link";
import NextImage from 'next/legacy/image'
import Dropdown from 'react-bootstrap/Dropdown';
// import Image from 'next/image'

import logo from '../../public/PetLogo.png'

const Nav = () => {





    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link href='/' className="navbar-brand">
                        {/* <p className="fs-4 fw-bold base-color my-auto">Pet Names Generators</p> */}
                        <div className="">
                            <NextImage
                                src={logo}
                                className="img-fluid"
                                // placeholder="blur"
                                width={200}
                                height={80}
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
                        <ul className="navbar-nav links-color ms-auto">
                          
                            <li className="nav-item mx-2 my-auto font-weight-600 fontSize-18">
                                <Link className="nav-link base-color" href="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2 my-auto  font-weight-600 fontSize-18">
                                <Link className="nav-link" href="/blog" title="">Articles</Link>
                            </li>

                            {/* <div className="float-end d-block d-lg-none">
                                <button className=" btn fw-bold border-warning bg-warning text-white">Buy me a Coffee</button>
                            </div> */}

                        </ul>
                    </div>
                    {/* <div className="float-end d-none d-lg-block">
                        <button className=" tool-name-btn base-color font-weight-500 my-2 background-color text-truncate m-auto">Buy me a Coffee</button>
                    </div> */}
                </div>
            </nav >
            <div className="border-divider"></div>

        </div >
    );
};

export default Nav;