import React, {useState} from 'react'
import Card from './speaker_card'
import lis from './speaker_data'

export default function Speaker(props) {

    return (
        <>
            <div>

    </div>
          <div className="">
            <div className="themehead text-center mt-0">Our Speakers</div>
          <div className="row ">
            
		{lis.map((e, i) => 
          
		<div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-around mb-5">
		<Card id={e.id} name={e['name']} place={e['place']} imag={e['imag']} know={e['know_more']} desc={e['desc']}/></div>
			)}
        
            

          
         
          </div>
            </div>
        </>
    )
}
