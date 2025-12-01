import React from 'react'
import SCH from '../documents/Schedule_ICSPT_2023.pdf'
export default function Schedule() {
  
  return (
    <div style={{backgroundColor: '#D3F5CF'}}>
      <div className="container mb-0" >
        <div className="fs-1 t1  text-center  M"><br></br>Program Schedule
        </div>
        <div className=" ABSTEXT t2 m-2 text-center mb-0">
        
          <br/><br/>Please see this document.<br/><br/>
          <a
                href={SCH}
                target="_blank"
                className="ABSBUTTONMOBILEFIX"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                <button className=" ABSTEXT btn btn-outline-dark BUTTONTABVIEW position-relative">
                &nbsp; SCHEDULE&nbsp; <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                        New!
                      </span>
                </button>
              </a>
              <br/><br/>
        
        </div>
            
        
      </div>
    </div>
  )
}
