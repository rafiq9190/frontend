import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import petList from '../../assets/chinesePetList.json'
import { ExportToExcel } from '../components/exportToExcel';
import Layout from '../components/layout';
import Link from 'next/link';
import Seo from '../components/seo';

function ChinesePetName() {
    const fileName = "Chinese-Pet-Names-List"

    const [getCharacter, setGetCharacter] = useState('');
    const [filterData, setFilterData] = useState(petList)
    const [data, setData] = useState()
    const [downloadData, setDownloadData] = useState([])
    const [textGen, setTextGen] = useState()


    const getPetInfo = (e) => {
        e.preventDefault()


        if (getCharacter == "") {
            const mergeAll = [...filterData.a, ...filterData.b, ...filterData.c, ...filterData.d,
            ...filterData.e, ...filterData.f, ...filterData.g, ...filterData.h, ...filterData.i,
            ...filterData.j, ...filterData.k, ...filterData.l, ...filterData.m, ...filterData.n,
            ...filterData.o, ...filterData.p, ...filterData.q, ...filterData.r, ...filterData.s, ...filterData.t,
            ...filterData.u, ...filterData.v, ...filterData.w, ...filterData.x, ...filterData.y, ...filterData.z]
                .filter((record) => record.name)

            const randomData = mergeAll.sort(() => Math.random() - 0.5).slice(0, 10);
            setData(randomData);
            setTextGen(true)
          

        } else {

            for (let key in filterData) {

                if (key == getCharacter) {
                    let allAlphabetRecords = filterData[key]
                    const randomDataAlphabet = allAlphabetRecords.sort(() => Math.random() - 0.5).slice(0, 10);
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
        <Layout>
            {/* <Seo seo={homepage.attributes.seo} /> */}
            <div className='container'>

                <div className='row'>
                    <div className='col-2'>
                        <div className='large-screen-ad position-sticky' style={{ top: "10px" }}></div>
                    </div>
                    <div className='col-12 col-lg-7'>
                        <h1 className='text-center my-2 mt-md-5 fw-bold'>Pet Names <span className='backgroundColor base-color px-2 rounded'>Generator</span></h1>
                        <p className='text-center py-2'>Create a Unique name for love of you!You need to called with Sweet pet name</p>
                        <div>
                            <div className='row'>
                                <div className='row'>

                                    <div className='col-11 text-end'>
                                        <ExportToExcel apiData={downloadData} fileName={fileName} />
                                    </div>
                                </div>
                                <div className='col-12'>

                                    <div className='name-generator-container border-divider rounded position-relative overflow-auto m-auto'>
                                        <div className='row row-cols-2 align-items-center justify-content-center'>

                                            {data && data.map((record, index) => (
                                                <div className='col' key={index}>
                                                    <div className='fw-bold text-truncate cursor user-select-none fs-5 my-2'><span onClick={(e) => getvalue(e)}>{record.name}<i className="fa fa-files-o base-color mx-2" aria-hidden="true"></i></span></div>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* <button type='submit' className='tool-name-btn base-color font-weight-500 my-2 background-color' title='Pet Age Generator'>Pet Age Calculator</button> */}


                                </div>
                                <div className='col-10 my-3 m-auto'>


                                    <Form onSubmit={getPetInfo} >



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
                                            <button type='submit' className='tool-name-btn base-color font-weight-500 my-2 background-color text-truncate m-auto fs-4' title='Pet Names Generator'>{textGen ? "Regenerate Pet Names" : "Generate Pet Name"}</button>
                                        </div>
                                    </Form>

                                </div>
                                <div className='shadow'>
                                    <h2 className='my-3'>About Chinese Pet Name Generator</h2>
                                    <p>How its works?</p>
                                </div>

                            </div>
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
                        <ul className='fs-5 font-weight-500 language '>
                            <li>
                                <Link className='language-list' href="">Washable beds under 70$</Link>
                            </li>
                            <li>
                                <Link className='language-list' href="/chinese">Top Dog Collurs</Link>
                            </li>
                            <li>
                                <Link className='language-list' href="/japanese">Pets Competition</Link></li>


                        </ul>

                        <div className='large-screen-ad position-sticky my-3' style={{ top: "10px" }}></div>
                    </div>
                </div>

            </div>
        </Layout>

    )
}

export default ChinesePetName