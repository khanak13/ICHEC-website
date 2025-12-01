import React from 'react'
import facebook from './images/facebook.png'
import insta from './images/instagram.png'
import twitter from './images/twitter.png'
import './style/footer.css'
export default function Footer(props) {
  return (
    <>
      {props.show &&
        <div className="w-100 ">

          <footer className="bg-dark py-3 m-0 sticky-bottom" >
            <p className="text-center text-light"><hr /></p>
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <p className="text-center CONFTEXT mb-0 z1">Conference organizers</p>
                <p className="text-center  MYTEXT mb-0 z2">Convenor:</p>
                <a href="https://cpdliitpatna.com/" target="_blank" rel="noreferrer" className='text-decoration-none'><p className="text-center  MYTEXT mb-0 z3">Dr. Jose V Parambil</p></a>
                <p className="text-center  MYTEXT mb-0 z4">Chemical and Biochemical Engineering Department, <br />
Indian Institute of Technology Patna</p>
              </div>
              <div className="col-xs-12 col-md-4 text-center">
                <br/>
                <p className="text-center  MYTEXT mb-0 z1">Links</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.iitp.ac.in/" className="text-white text-decoration-none MYTEXT">Institute Website</a><br />
                <a target="_blank" rel="noopener noreferrer" href="https://www.iitp.ac.in/index.php/departments/engineering-technology/chemical-and-biochemical-engineering" class="text-white text-decoration-none MYTEXT">Department Website</a><br />
              <br />
               
              </div>
            </div>
            <div className="row mt-2" >
            <div className="col-xs-12 col-md-6"><div className="text-center">
            <a href="https://www.facebook.com/ICSPT2023" target="_blank" rel="noreferrer"><img src={facebook} className='SOCIALMEDIA' alt="ICSPT Facebook" /></a>
            <a href="https://twitter.com/2023_ICSPT" target="_blank" rel="noreferrer"><img src={insta} className='SOCIALMEDIA' alt="ICSPT Instagram" /></a>
            <a href="https://www.instagram.com/icspt2023/" target="_blank" rel="noreferrer"><img src={twitter} className='SOCIALMEDIA' alt="ICSPT Twitter" /></a>
              
               
              
              </div></div>
            <div className="col-xs-12 col-md-6"> <p className="text-center text-primary MYTEXT mb-0 z4" style={{paddingLeft: '20px'}}>© 2022-23 IIT Patna <br/>  Designed and developed by Jatin and Chandan</p></div>
              
              
            </div>
           
          </footer>
        </div>
      }
    </>
  )
}
