import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Form from 'react-bootstrap/Form';
import petList from '../../assets/petList.json'
import { getStrapiMedia } from "../../lib/media";
import { ExportToExcel } from './exportToExcel';
import Image from 'next/image'


function Banner({ homepage, articles }) {
    console.log('articles', articles)
    const fileName = "Pet-Name-list"

    const [petGender, setPetGender] = useState('');
    const [getCharacter, setGetCharacter] = useState('');
    const [filterData, setFilterData] = useState(petList)
    const [data, setData] = useState()
    const [downloadData, setDownloadData] = useState([])



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

                    <div className='col-12 col-lg-9 m-auto'>
                        <h1 className='text-center my-2 mt-md-5 fw-bold'>Pet Names <span className='base-color'>Generator</span></h1>
                        <p className='text-center py-2 fontSize-18'>Discover the perfect name for your furry friend with our comprehensive pet name generator tool. From cute and unique to traditional and popular, we've got you covered!</p>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='row'>

                                    <div className='col m-auto text-end p-0' style={{maxWidth:"612px"}}>
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
                                <div className='col-12 col-lg-8 my-3 m-auto'>


                                    <Form onSubmit={getPetInfo} >
                                        <div className='d-flex justify-content-between flex-wrap my-2'>
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
                                            <button type='submit' className='tool-name-btn text-white font-weight-500 my-2 text-truncate m-auto fs-4' title='Pet Names Generator'>Generate Pet Name</button>
                                        </div>
                                    </Form>

                                </div>

                            </div>
                        </div>




                    </div>

                    <h1 className='my-3'>About Our <span className='base-color'>Pet Names Generator!</span></h1>

                </div>
                <div className='row'>
                    <div className='col-12 col-lg-9'>
                        <div className='about-container fontSize-18 container custom-shadow p-3 mb-5 rounded'>
                            <p> Welcome to Pet Names Generators, the ultimate destination for generating unique and creative names for your beloved pets. Our pet names generator tool offers many ideas for dogs, cats, birds, fish, and other pets.</p>

                            <p>  With our pet names generator tool, you can quickly generate cute, funny, and creative pet names for your pet. Our tool offers a variety of categories to choose from, including gender-specific pet names, breed-specific pet names, character-inspired pet names, and animal-inspired pet names.
                                Our pet names generator tool uses advanced algorithms to generate unique and creative pet names. Enter your pet's information, such as gender and breed, and our tool will generate a list of potential pet names for you to choose from.
                                In addition, our pet names generator blog provides pet name ideas, trends, and inspiration for pet owners.</p>
                            <p> Our blog is updated regularly with new and exciting pet name ideas for all types of pets.
                                Choosing the perfect name for your pet is essential, so we're here to help. Our pet names generator tool and blog are designed to make finding the perfect pet name fun and easy.</p>
                            <p className='fw-bold'>Try our pet names generator tool today and give your pet the perfect name they deserve!</p>
                            <p className='fw-bold base-color'>Conclusion:</p>
                            <p>Pet Names Generators is your one-stop destination for generating unique and creative pet names. With our pet names generator tool and blog, you can quickly generate pet name ideas and stay up-to-date on the latest pet name trends. Try our pet names generator tool today and give your pet the perfect name they deserve!</p>

                        </div>
                        <h1 className='my-3'>Dog Related Articles</h1>
                        {
                            articles && articles.map((article, index) => {
                                const getLatestPostImage = article.attributes.image
                                const {width,height}=article.attributes.image.data.attributes
                                return (
                                    <div className='col-12 col-md-6 col-lg-12 my-2' key={index}>
                                        <Link href={`/article/${article.attributes.slug}`}  >
                                            <div className="card rounded border-0 custom-shadow">
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <Image
                                                            src={getStrapiMedia(getLatestPostImage)}
                                                            width={width}
                                                            height={height}
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
                    <div className='col-12 col-lg-3'>
                        <div className='position-sticky' style={{ top: "2px" }}>
                            <div >
                                <p className='fs-3 font-weight-500 base-color'>Popular Categories</p>
                                <ul className='fs-5 font-weight-500 language '>
                                    <li>
                                        <Link className='language-list' href="/dogTraining">Pet Training</Link>
                                    </li>
                                    <li>
                                        <Link className='language-list' href="/supplies">Supplies</Link>
                                    </li>
                                    <li>
                                        <Link className='language-list' href="/petSafety">Pet Safety</Link></li>
                                    <li>
                                        <Link className='language-list' href="/homeCleaning">Home Cleaning</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="side-ad my-3"></div>
                            <div className="side-ad my-3"></div>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Banner