import React from "react";
import Modal from "./Modal";
import "./style/speaker.css";
export default function Card(props) {
  return (
    <>
      {/* <div className="card bg-dark text-white mycustom shadow mb-5 mt-5 bg-white p-0 mr-0 rounded" >
 
  <div className="card-img-overlay">
    <h5 className="card-title"><bold>{props.name}</bold></h5>
    <p className="card-text ">{props.place}</p>
      <div className="gradeTriangle">
    <div className="amountContainer"></div>
  </div>
  </div>

</div> */}
      <div className="d-flex flex-column h-30 w-75">
        <div className="SpeakerElement">
          <div className="text-center">
            {" "}
            <h5 className="SpeakerName">{props.name}</h5>
            <p className="SpeakerPlace">{props.place}</p>
          </div>

        </div>
        
        <img
            className="SpeakerImg rounded-circle"
            src={require(`${props.imag}`)}
            alt={props.name}
          />

          <Modal
            key={props.id}
            name={props.name}
            place={props.place}
            desc={props.desc}
            know={props.know}
            imag={props.imag}
            id={props.id}
          />
      </div>
      {/* <div className="d-flex justify-content-center flex-column shadow p-3 m-5 rounded o1">
        
          <div className="text-center"><img className="imgCard rounded-circle" src={require(`${props.imag}`)} alt="Card" /> <h5 className="fs-4 o2 font-weight-bold"><bold>{props.name}</bold></h5>
          <p className="fs-6 o3">{props.place}</p></div>
           <Modal key={props.id} name={props.name} place={props.place} desc={props.desc} know={props.know} imag={props.imag} id={props.id} />
          
         
     
      </div> */}
    </>
  );
}
