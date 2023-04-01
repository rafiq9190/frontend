import Layout from '../components/layout'
import React from 'react'
import Seo from '../components/seo'
import { fetchAPI } from "../../lib/api";
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function dogAge({ dogAgePage }) {
  

  const getCalculate = (e) => {
    e.preventDefault()
    // toast('Soory! There is an error occure. Please visit it later', { hideProgressBar: true, autoClose: 5000, type: 'Error' })
    toast.error(<span style={{ fontSize: '14px', fontWeight: 'bold' }}>There is an Error Occure Please visit it later</span>)

  }
  return (
    <Layout>
      <ToastContainer />
      <Seo seo={dogAgePage.attributes.seo} />
      <div className='container'>
        <div className='row'>
          <div className='col-2  d-none d-lg-block'>
            <div className="large-screen-ad "></div>
          </div>
          <div className='col-12 col-lg-8'>
            <h1 className='text-center my-3'>Dog Age <span className='backgroundColor rounded base-color'>Calculator</span></h1>
            <p className='text-center'>Dog age calculator gives you age of your pet. you can also use our pet names generator</p>
            <div className='row'>
              <div className='col-12 col-lg-8'>
                <form onSubmit={getCalculate}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control hide-shadow" id="floatingInput" placeholder="your pet Name" />
                    <label for="floatingInput fw-bold">Your Pet Name?</label>
                    <p>Find the Pet name <Link href="/"><span className='base-color fw-bold'>click here</span></Link></p>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="date" className="form-control hide-shadow" id="floatingInput" placeholder="Your Pet Date of Birdth" />
                    <label for="floatingInput fw-bold">Your Pet Date of Birdth?</label>

                  </div>
                  <div className="form-floating mb-3">
                    <input type="number" className="form-control hide-shadow" id="floatingInput" placeholder="How many teeths of your pet" required />
                    <label for="floatingInput fw-bold">How many teeths of your pet?</label>

                  </div>
                  <div className=''>
                    <button type='submit' className='tool-name-btn base-color font-weight-500 my-2 background-color text-truncate m-auto' title='Dog Age Calculator'>Calculate</button>



                  </div>

                </form>
              </div>
              <div className='col-12 col-lg-4'>
                <div className='name-generator-container border-divider rounded position-relative overflow-auto'>

                </div>
              </div>
            </div>
          </div>
          <div className='col-2 d-none d-lg-block'>
            <div className="large-screen-ad"></div>
          </div>
        </div>
        <div className='row gx-3'>
          <div className='col-12 col-lg-7 custom-shadow rounded my-3 '>
            <h1 className='my-3'>Tips To Determine your Dog’s Age</h1>
            <p>You do not always have to use our Dog Age Calculator, no matter how old or young your canine seems there is always an easy way to have a rough idea of their age.
            A dog’s teeth can help in guessing their age:</p>
            <p>8 weeks: Baby teeth are in.</p>
            <p>7 months: All permanent teeth are in. Teeth are white and clean.</p>
            <p>1-2 years: Teeth are dull or discolored. The back of the teeth might turn yellow because of plaque or other dental diseases.</p>
            <p>3-5 years: All teeth may have tartar buildup and some tooth wear.</p>
           <p> 5-10 years: Teeth show more wear and signs of disease.</p>
            <p>10-15 years: Teeth are wasted, and heavy tartar might buildup. Some teeth might be missing!</p>
            <p>Pet owners usually get an idea by examining the teeth of their dogs but sometimes the age is not evident by teeth. In such cases your vet might examine your dog and check for some signs to determine the age of your age. Older dogs might show some signs of aging such as cloudy eyes, joint pain, grey hair, loose skin and stiff legs.
            Are you getting a new puppy soon?  You can also try our other</p>
          </div>
          <div className='col-12 col-lg-4  p-3'>
            <h4> Dog Age Calculator</h4>
            <p>       A dogs age develops at a faster rate than humans. One way to calculate your dog’s age is to multiply his estimated current age by seven, this formula is not 100% accurate depending upon different breeds of dogs, however you can get a close idea by using our dog age calculator tool.
              If you have owned a dog for quite some time you probably would like to know your dog’s exact age. Since dogs are different than humans, they age differently. During their first few years of life they mature rapidly from puppyhood to adulthood.
              When calculating the age of your dog, several factors matter such as the breed and size of the dog. Vets suggest smaller dogs tend to live longer than medium and larger ones.
              You can also check out our free <Link href='/'><span className='base-color'>Pet Name Generator tool</span></Link>.</p>


          </div>
        </div>
      </div>

    </Layout>
  )

}

export async function getServerSideProps({ req, res }) {
  // Run API calls in parallel
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const [dogAgepageRes] = await Promise.all([

    fetchAPI("/dog-age", {
      populate: {

        seo: { populate: "*" },
      },
    }),


  ]);

  return {
    props: {

      dogAgePage: dogAgepageRes.data,

    },
    // revalidate: 60,
  };

}


export default dogAge