import React, { useState, useEffect } from 'react';
import './style/new.css'
export default function Theme() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let height1 = document.getElementById('Q2').clientHeight
    console.log(height1)
    document.getElementById('Q1').style.height = `${height1}px`
    document.getElementById('Q3').style.height = `${height1}px`
    const handleResize = () => {
      
      setWindowWidth(window.innerWidth);
      let height1 = document.getElementById('Q2').clientHeight
    console.log(height1)
    document.getElementById('Q1').style.height = `${height1}px`
    document.getElementById('Q3').style.height = `${height1}px`
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  const boxSize = windowWidth >= 992 ? 'col-md-3' : 'col-10';
  
  return (
    <div className="theme">
      <div className="">
        <div className="ml-2 mr-2">
          <br/><br/>
          <div className="text-center mb-2 opacity-100 themehead">Theme</div>
      <div className="row opacity-100 d-flex justify-content-around">
        <div className={boxSize+' p-3 THEMEBOX-SHADOW mb-2  rounded  themebox'} id="Q1">
          <div className="box">
            <p className="he1">Crystallization of small organic and biomolecules </p>
          </div>
        </div>
        <div className={boxSize + ' p-3  THEMEBOX-SHADOW mb-2 rounded themebox'} id="Q2">
          <div className="box">
            <p className="he1" style={{color: '#545454'}}>Extraction techniques for phytochemical and food products</p>
          </div>
        </div>
        <div className={boxSize+'  p-3 THEMEBOX-SHADOW  mb-2  rounded themebox'} id='Q3'> 
          <div className="box">
            <p className="he1">Novel separation techniques</p>
          </div>
        </div>
      </div>
          <br/><br/><br/><br/>
    </div>
      </div>

    </div>
  )
}
