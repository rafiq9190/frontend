import React, { useState, useEffect, useContext } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import NextImage from 'next/legacy/image'
import logo from '../../public/headerLogo.png'
import { StoreContext } from "../../store";
import reloader from "./preloader";

const Nav = ({ }) => {
    const { state, dispatch } = useContext(StoreContext);
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredArticles, setFilteredArticles] = useState()

    console.log('state nav', state)



    const handleSearchQueryChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value);
        if (value.length > 0) {
            const storedArticles = JSON.parse(localStorage.getItem('articles'));
            const filtered = storedArticles && storedArticles.filter((article) =>
                article.attributes.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredArticles(filtered);
        }

    };

    const handleRedirect = (slug) => {
        // reset the search query and filtered articles
        setSearchQuery('');
        // dispatch({ type: "SET_ARTICLES", payload: state.articles });
        // setFilteredArticles(state.articles);
        // redirect to related article
        router.push(`/article/${slug}`);
    };

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
                    <div className="collapse navbar-collapse justify-content-center " id="navbarNavDropdown">
                        <ul className="navbar-nav links-color">

                            <li className="nav-item mx-2 my-auto font-weight-600">
                                <Link className="nav-link base-color" href="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2 my-auto  font-weight-600">
                                <Link className="nav-link" href="/blog" title="">Pet Blog</Link>
                            </li>
                            <li className="nav-item mx-2 my-auto font-weight-600">
                                <Link className="nav-link" href="/" title="">Pet Names</Link>
                            </li>
                            <li className="nav-item mx-2 my-auto font-weight-600">
                                <div className="dropdown">
                                    <Link className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Lifestyle
                                    </Link>

                                    <ul class="dropdown-menu shadow list-styled">

                                        <li className="my-auto fw-bold"><Link className="dropdown-item" href="/dogTraining">Pet Training</Link></li>

                                        <li className="my-auto fw-bold"><Link className="dropdown-item" href="/supplies">Supplies</Link></li>
                                        <li className="my-auto fw-bold"><Link className="dropdown-item" href="/petSafety">Pet Safety</Link></li>
                                        <li className="my-auto fw-bold"><Link className="dropdown-item" href="/homeCleaning">Home Cleaning</Link></li>

                                    </ul>
                                </div>
                            </li>




                        </ul>
                        <div id="tools_search" className="d-none d-md-block d-lg-none my-3">
                            <div className="input-group">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchQueryChange}
                                    id="search_tools_field"
                                    className="form-control border-0 cursorShow"
                                    placeholder="Search"
                                    autocomplete="off"
                                />
                                <button id="h_search_btn" className="btn btn-background ms-0 border-0" type="button">
                                    <i className="icon icon-medium icon-search icon-white-bg px-3" aria-hidden="true"></i>
                                    {/* <i className="fa fa-times text-white d-none" aria-hidden="true"></i> */}
                                </button>
                            </div>
                            <div className="input-search-field-items">
                                <div className="box_loading_container">
                                    <div className="box_loading">
                                        <div />
                                        <div />
                                        <div />
                                    </div>
                                </div>
                            </div>
                            {
                                searchQuery && filteredArticles && filteredArticles.length > 0 ? (
                                    <div id="searched_results">
                                        <span className="fontSize-14 p-1">Related Searches</span>
                                        <ul id="searched_results_ul" className="list-unstyled p-2">

                                            {filteredArticles && filteredArticles.map((article) => (
                                                <li key={article.attributes.slug} onClick={() => handleRedirect(article.attributes.slug)}>

                                                    <span dangerouslySetInnerHTML={{ __html: article.attributes.title.replace(new RegExp(searchQuery, "gi"), "<b>$&</b>") }} />

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : searchQuery && (!filteredArticles || filteredArticles.length === 0) ? (
                                    <div id="searched_results">
                                        <span className="fw-bold p-1">Related Searches</span>
                                        <p className="text-dark">No records found</p>
                                    </div>
                                ) : null

                            }

                        </div>
                    </div>

                    <div id="tools_search" className="d-md-none d-lg-block">
                        <div className="input-group">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchQueryChange}
                                id="search_tools_field"
                                className="form-control border-0 cursorShow"
                                placeholder="Search"
                                autocomplete="off"
                            />
                            <button id="h_search_btn" className="btn btn-background ms-0 border-0" type="button">
                                <i class="fa fa-search text-white" aria-hidden="true"></i>
                                <i class="fa fa-times text-white d-none" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="input-search-field-items">
                            <div className="box_loading_container">
                                <div className="box_loading">
                                    <div />
                                    <div />
                                    <div />
                                </div>
                            </div>
                        </div>
                        {
                            searchQuery && filteredArticles && filteredArticles.length > 0 ? (
                                <div id="searched_results">
                                    <span className="fontSize-14 p-1">Related Searches</span>
                                    <ul id="searched_results_ul" className="list-unstyled p-2">
                                        {filteredArticles && filteredArticles.map((article) => (
                                            <li key={article.attributes.slug} onClick={() => handleRedirect(article.attributes.slug)}>

                                                <span dangerouslySetInnerHTML={{ __html: article.attributes.title.replace(new RegExp(searchQuery, "gi"), "<b>$&</b>") }} />

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : searchQuery && (!filteredArticles || filteredArticles.length === 0) ? (
                                <div id="searched_results">
                                    <span className="fw-bold p-1">Related Searches</span>
                                    <p className="text-dark">No records found</p>
                                </div>
                            ) : null

                        }

                    </div>

                </div>
            </nav >
            <div className="border-divider"></div>

        </div >
    );
};

export default Nav;