import React, { useState, useEffect } from 'react';
import { getStrapiMedia } from "../../lib/media";
import NextImage from 'next/legacy/image'
import Form from 'react-bootstrap/Form';
import petList from '../../assets/petList.json'



function Banner({ homepage }) {


    const [checkPetName, setCheckPetName] = useState("");
    const [petGender, setPetGender] = useState('');
    const [getCharacter, setGetCharacter] = useState('');
    const [filterData, setFilterData] = useState(petList)
    const [data, setData] = useState()
    console.log('data', data)


    const getPetInfo = (e) => {
        e.preventDefault()
        if (getCharacter.length > 0) {

            if (getCharacter == 0) {
                const mergeAll = [...filterData.a, ...filterData.b, ...filterData.c, ...filterData.d,
                ...filterData.e, ...filterData.f, ...filterData.g, ...filterData.h, ...filterData.i,
                ...filterData.j, ...filterData.k, ...filterData.l, ...filterData.m, ...filterData.n,
                ...filterData.o, ...filterData.p, ...filterData.q, ...filterData.r, ...filterData.s, ...filterData.t,
                ...filterData.u, ...filterData.v, ...filterData.w, ...filterData.x, ...filterData.y, ...filterData.z]
                    .filter((record) => record.gender === petGender)

                const randomData = mergeAll.sort(() => Math.random() - 0.5).slice(0, 1);
                setData(randomData);
            }
            for (let key in filterData) {

                if (key == getCharacter) {
                    let allAlphabetRecords = filterData[key]
                    const randomDataAlphabet = allAlphabetRecords.sort(() => Math.random() - 0.5).slice(0, 1);
                    setData(randomDataAlphabet)

                }
            }

            // const randomDataAlphabet = AlphabetCharacterWise.sort(() => Math.random() - 0.5).slice(0, 20);
            // setData(randomDataAlphabet);
        }

    }


    return (
        <>
            <div className='container'>

                <div className='row'>
                    <div className='col-2 d-none d-lg-block'>
                        <div className='large-screen-ad'></div>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <h1 className='text-center my-2 mt-md-5 fw-bold'>Pet Names <span className='backgroundColor base-color px-2 rounded'>Generator</span></h1>
                        <p className='text-center'>Create a Unique name for love of you!You need to called with Sweet pet name</p>
                        <div>
                            <div className='row'>
                                <div className='col-12 col-md-9'>
                                    <div className='row'>
                                        <div className='col-12 mx-3 my-2 base-color fw-bold my-auto'>  </div>
                                    </div>
                                    <div className='name-generator-container border-divider rounded position-relative'>
                                        <div className='row align-items-center justify-content-center'>

                                            {data && data.map((record, index) => (
                                                <div className='col-12' key={index}>
                                                    <span className=' fs-3 fw-bold px-2 text-truncate'>{record.name}</span>
                                                    {/* <p>{record.gender}</p> */}
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                   

                                </div>
                                <div className='col-12 col-md-3 my-auto'>


                                    <h5>Options</h5>

                                    <Form onSubmit={getPetInfo}>
                                        <p className='f6 mb-1'>Pet Types :</p>
                                        <div className='my-1'>
                                            <div className='d-flex justify-content-between'>

                                                <div class="form-check">
                                                    <input class="form-check-input custom-radio-style" type="radio" name="checkPet" value="cat" id="cat" onChange={(e) => setCheckPetName(e.target.value)} required />
                                                    <label className="form-check-label" for="cat">
                                                        Cat
                                                    </label>
                                                </div>


                                                <div class="form-check ">
                                                    <input class="form-check-input custom-radio-style" type="radio" name="checkPet" value="dog" id="dog" onChange={(e) => setCheckPetName(e.target.value)} required />
                                                    <label className="form-check-label" for="Dog">
                                                        Dog
                                                    </label>
                                                </div>


                                            </div>

                                        </div>
                                        <p className='f6 mb-1'>Pet Gender :</p>
                                        <div className='my-1'>
                                            <div className='d-flex justify-content-between'>

                                                <div class="form-check">
                                                    <input class="form-check-input custom-radio-style"
                                                        type="radio"
                                                        name="maleCheck"
                                                        value="male"
                                                        onChange={(e) => setPetGender(e.target.value)} />
                                                    <label className="form-check-label" for="dog">
                                                        Male
                                                    </label>
                                                </div>


                                                <div class="form-check ">
                                                    <input class="form-check-input custom-radio-style"
                                                        type="radio"
                                                        name="maleCheck"
                                                        onChange={(e) => setPetGender(e.target.value)}
                                                        value="female" />
                                                    <label className="form-check-label" for="dog">
                                                        Female
                                                    </label>
                                                </div>

                                            </div>

                                        </div>
                                        <div className='my-3'>

                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" onClick={(e) => setGetCharacter(e.target.value)} >
                                                <option value="0" className=''>No Alphabet</option>
                                                <option value="a">A</option>
                                                <option value="b">B</option>
                                                <option value="c">C</option>
                                                <option value="d">D</option>
                                                <option value="e">E</option>
                                                <option value="f">F</option>
                                                <option value="g">G</option>
                                                <option value="h">H</option>

                                                <option value="i">I</option>
                                                <option value="j">J</option>
                                                <option value="k">K</option>
                                                <option value="l">L</option>
                                                <option value="m">M</option>
                                                <option value="n">N</option>
                                                <option value="o">O</option>
                                                <option value="p">P</option>
                                                <option value="q">Q</option>
                                                <option value="r">R</option>
                                                <option value="s">S</option>
                                                <option value="t">T</option>
                                                <option value="u">U</option>
                                                <option value="v">V</option>
                                                <option value="W">W</option>
                                                <option value="x">X</option>
                                                <option value="y">Y</option>
                                                <option value="z">Z</option>



                                            </select>

                                        </div>

                                        <button type='submit' className='tool-name-btn base-color font-weight-500 my-2 background-color' title='Pet Names Generator'>Generate Pet Name</button>

                                    </Form>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-2 d-none d-lg-block'>
                        <div className="large-screen-ad"></div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default Banner