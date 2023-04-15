import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import petList from '../../assets/petList.json'

import { getStrapiMedia } from "../../lib/media";
import { ExportToExcel } from './exportToExcel';
import Image from 'next/image'


function Banner({ homepage, articles }) {

    const fileName = "Pet-Name-list"

    const [petGender, setPetGender] = useState('');
    const [getCharacter, setGetCharacter] = useState('');
    const [filterData, setFilterData] = useState(petList)
    const [data, setData] = useState()
    const [downloadData, setDownloadData] = useState([])
    const [textGen, setTextGen] = useState()

    console.log('getCharacter', getCharacter)
    const getPetInfo = (e) => {
        e.preventDefault()


        if (getCharacter == "") {
            const mergeAll = [...filterData.a, ...filterData.b, ...filterData.c, ...filterData.d,
            ...filterData.e, ...filterData.f, ...filterData.g, ...filterData.h, ...filterData.i,
            ...filterData.j, ...filterData.k, ...filterData.l, ...filterData.m, ...filterData.n,
            ...filterData.o, ...filterData.p, ...filterData.q, ...filterData.r, ...filterData.s, ...filterData.t,
            ...filterData.u, ...filterData.v, ...filterData.w, ...filterData.x, ...filterData.y, ...filterData.z]
                .filter((record) => record.gender === petGender)

            const randomData = mergeAll.sort(() => Math.random() - 0.5).slice(0, 18);
            setData(randomData);
            setTextGen(true)
            console.log('getCharacter', getCharacter)

        } else {

            for (let key in filterData) {

                if (key == getCharacter) {
                    let allAlphabetRecords = filterData[key]
                    const randomDataAlphabet = allAlphabetRecords.sort(() => Math.random() - 0.5).slice(0, 18);
                    setData(randomDataAlphabet)
                    setTextGen(true)
                }
            }

            // const randomDataAlphabet = AlphabetCharacterWise.sort(() => Math.random() - 0.5).slice(0, 20);
            // setData(randomDataAlphabet);
        }





    }
    const getvalue = (e) => {
        let newName = {
            name: e.target.innerText

        }
        setDownloadData([newName, ...downloadData])

    }


    return (
        <>
            <div className='container'>

                <div className='row'>
                    <div className='col-2'>
                        <div className='large-screen-ad position-sticky' style={{top:"10px"}}></div>
                    </div>
                    <div className='col-12 col-lg-7'>
                        <h1 className='text-center my-2 mt-md-5 fw-bold'>Pet Names <span className='base-color'>Generator</span></h1>
                        <p className='text-center py-2 fontSize-18'>Create a Unique name for love of you!You need to called with Sweet pet name</p>
                        <div>
                            <div className='row'>
                                <div className='row'>

                                    <div className='col-11 text-end'>
                                        <ExportToExcel apiData={downloadData} fileName={fileName} />
                                    </div>
                                </div>
                                <div className='col-12'>

                                    <div className='name-generator-container border-divider rounded position-relative overflow-auto m-auto'>
                                        <div className='row row-cols-2 row-cols-md-3 align-items-center justify-content-center'>

                                            {data && data.map((record, index) => (
                                                <div className='col' key={index}>
                                                    <div className='fw-bold text-truncate cursor user-select-none fs-5'><span onClick={(e) => getvalue(e)}>{record.name}<i className="fa fa-files-o base-color mx-2" aria-hidden="true"></i></span></div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* <button type='submit' className='tool-name-btn base-color font-weight-500 my-2 background-color' title='Pet Age Generator'>Pet Age Calculator</button> */}


                                </div>
                                <div className='col-10 my-3 m-auto'>


                                    <Form onSubmit={getPetInfo} >
                                        <div className='d-flex justify-content-between my-2'>
                                            <span className='f6 mb-1 fw-bold fontSize-18'>Pet Gender :</span>

                                            <div class="form-check fontSize-18">
                                                <input class="form-check-input custom-radio-style"
                                                    type="radio"
                                                    name="maleCheck"
                                                    value="male"
                                                    onChange={(e) => setPetGender(e.target.value)} />
                                                <label className="form-check-label fontSize-18 fw-bold" for="dog">
                                                    Male
                                                </label>
                                            </div>


                                            <div class="form-check fontSize-18">
                                                <input class="form-check-input custom-radio-style"
                                                    type="radio"
                                                    name="maleCheck"
                                                    onChange={(e) => setPetGender(e.target.value)}
                                                    value="female" />
                                                <label className="form-check-label fw-bold fontSize-18" for="dog">
                                                    Female
                                                </label>
                                            </div>

                                        </div>

                                        <div className="form-floating my-2">
                                            <select className="form-select lg" id="floatingSelect" aria-label="Floating label select example" onChange={(e) => setGetCharacter(e.target.value)}>
                                                <option selected value=''>No Alphabet Select</option>
                                                <option value='a'>A</option>
                                                <option value='b'>B</option>
                                                <option value='c'>C</option>
                                                <option value='d'>D</option>
                                                <option value='e'>E</option>
                                                <option value='f'>F</option>
                                                <option value='g'>G</option>
                                                <option value='h'>H</option>
                                                <option value='i'>I</option>
                                                <option value='j'>J</option>
                                                <option value='k'>K</option>
                                                <option value='l'>L</option>
                                                <option value='m'>M</option>
                                                <option value='n'>N</option>
                                                <option value='o'>O</option>
                                                <option value='p'>P</option>
                                                <option value='q'>Q</option>
                                                <option value='r'>R</option>
                                                <option value='s'>S</option>
                                                <option value='t'>T</option>
                                                <option value='u'>U</option>
                                                <option value='v'>V</option>
                                                <option value='w'>W</option>
                                                <option value='x'>X</option>
                                                <option value='y'>Y</option>
                                                <option value='z'>Z</option>
                                            </select>
                                            <label htmlFor="floatingSelect">Select Alphabet</label>
                                        </div>

                                        <div className='text-center my-3'>
                                            <button type='submit' className='tool-name-btn base-color font-weight-500 my-2  text-truncate m-auto fs-4' title='Pet Names Generator'>{textGen ? "Regenerate Pet Names" : "Generate Pet Name"}</button>
                                        </div>
                                    </Form>

                                </div>

                            </div>
                        </div>

                        <h1 className='my-3'>About Our <span className='base-color'>Pet Names Generator!</span></h1>
                        <div className='col-12'>
                            <div className='about-container fontSize-18 container custom-shadow p-3 mb-5 rounded'>
                                <h3 className='my-3 base-color'>How Its Works?</h3>
                                <p>Our Pet Names Generator works with the following conditions:</p>
                                <ol>
                                    <li>Select the Pet type from the options (e.g., Cat or Dog).</li>
                                    <li>Select the Pet gender like Male or Female.</li>
                                    <li>Press the button <span className='fw-bold'>"Generate Pet Names"</span></li>
                                </ol>
                                <p> Then you will see many names showing on your screen. You can select any name from the list. These pet names are downloadable. If you are not able to get your favorite pet names on the first generate, then you can also press the button "Regenerate". It will bring new pet names for you. </p>

                                <h3 className='my-3 base-color'>How to get Alphabetically Pet Names?</h3>
                                <p>If you want to get Alphabetically pet names, then make sure that you do the following:</p>
                                <ol>
                                    <li>Select the Pet type from the options (e.g., Cat or Dog). </li>
                                    <li>Select the Pet gender like Male or Female.</li>
                                    <li> Select the Alphabet from dropdown menu (e.g., A).</li>
                                    <li>And then press the button <span className='fw-bold'>"Generate Pet Names"</span></li>
                                </ol>
                                <p>Similarly, random pet names generator gives you pet names randomly. But if you choose Alphabet, then it will bring the pet names that start with that alphabetically.</p>

                            </div>
                            <h1 className='my-3'>Dog Related Articles</h1>
                            {
                                articles && articles.map((article, index) => {


                                    const getLatestPostImage = article.attributes.image

                                    return (
                                        <div className='col-12 col-md-6 col-lg-12 my-2' key={index}>
                                            <Link href={`/article/${article.attributes.slug}`}  >
                                                <div className="card rounded border-0 custom-shadow">
                                                    <div className="row g-0">
                                                        <div className="col-md-4">
                                                            <Image
                                                                src={getStrapiMedia(getLatestPostImage)}
                                                                width={400}
                                                                height={200}
                                                                className="img-fluid rounded-start"
                                                                alt={getLatestPostImage.data.attributes.alternativeText
                                                                }
                                                            />
                                                        </div>
                                                        <div className="col-md-8 overflow-hidden">
                                                            <div className="card-body">
                                                                <p className="card-text text-truncate fw-bold base-color fs-5">{article.attributes.title}</p>
                                                                <p className="card-text">{article.attributes.description}</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>


                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className="side-ad my-3"></div>
                        
                        <div >
                            <p className='fs-4 font-weight-500'>Find Pet Names in Other <span className='base-color'>Languages</span></p>
                            <ul className='fs-5 font-weight-500 language '>
                                <li>
                                    <Link className='language-list' href="/">Common</Link>
                                </li>
                                <li>
                                    <Link className='language-list' href="/chinese">Chinese</Link>
                                </li>
                                <li>
                                    <Link className='language-list' href="/japanese">Japanese</Link></li>
                                <li>
                                    <Link className='language-list' href="/french">French</Link>
                                </li>

                            </ul>
                        </div>
                        <p className='fs-4 font-weight-500 base-color'>Trending Products</p>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Banner