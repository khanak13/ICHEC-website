import React from "react";
import "./style/speaker.css";
import arrow from "./images/right-arrow.png";
import close from './images/cancel.png'
export default function Modal(props) {
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="MODALKNOW"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal${props.id}`}
        >
          View More
        </button>
      </div>
      <div id="staticBackdrop">
        <div
          className="modal  fade"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
          id={`exampleModal${props.id}`}
        >
          <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable ">
            <div className="modal-content">
              <div class="modal-body">
                <img
                  src={require(`${props.imag}`)}
                  className="MODALIMAG"
                  alt=""
                />
                <p className="MODALNAME">{props.name}</p>
                <br/>
                <p className="MODALPLACE">{props.place}</p>
                <div className="d-flex justify-content-center">
                  <div
                    style={{
                      borderTop: "1px solid black",
                      borderBottom: "3px solid black",
                      width: "70%",
                    }}
                  ></div>
                </div>
                <p className="MODALTEXT">{props.desc} </p>
                <div className="d-flex justify-content-center">
                  <a href={props.know} className="link-dark" target="_blank">
                    Get more Details{<img className="MODALARROW" src={arrow} />}
                  </a>
                </div>
                <br />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  style={{border: 'none'}}
                >
                 <img src={close} className="MODALARROW" alt=""  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
