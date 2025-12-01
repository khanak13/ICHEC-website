import React from "react";
import "./style/new.css";
import AbsTemp from "../documents/Abstract_template.docx";
import BookImg from "./images/9.jpg";
import CMT from '../documents/CMT Registration and submission guidance.pdf'
//import { useNavigate } from "react-router-dom";
export default function RegisterComp() {
  //const navigate = useNavigate();
  return (
    <>
      <div className="back1s">
        <div className="themehead text-center m-2 mt-1">
          Abstract Submission and Publication
        </div>
        {/* <div className=" fs-5 t2 m-2">
          The conference will offer opportunities for both oral and poster presentations to researchers. The format for abstract submission will be shared soon. Selected presentations from those who attend the conference will be invited to submit their manuscript to a reputed international journal for publication after due review process.</div>

        <div className="d-flex justify-content-around">
          <div className=""><button class="btn btn-outline-dark" onClick={() => navigate("/abstract")}>Submit Abstract</button></div>
        </div> */}

        <div className="ABSTEXT t2 m-2 text-left">
          <br />
          The conference will offer opportunities for both oral and poster
          presentations to researchers. All abstracts will be published in an
          Abstract Booklet with ISBN and DOI (at book level).
          <br />
          Selected papers presented at the conference will be invited to submit
          articles to a special issue in the journal <br />
          <a
            className="link-dark"
            style={{ fontWeight: "bold" }}
            href="https://www.sciencedirect.com/journal/chemical-engineering-research-and-design"
            target="_blank"
            rel="noreferrer"
          >
            Chemical Engineering Research and Design
          </a>{" "}
          (IChemE publication in partnership with Elsevier; 4.119 Impact Factor)
          for publication after a due review process.
          <br />
          <div
            style={{
              display: "flex",
              flex: "wrap",
              justifyContent: "space-around",
            }}
          >
            <img
              src={BookImg}
              id="BookImg"
              alt="Chemical Engineering Research and Design"
            />
          </div>
          <div className="row" style={{ marginTop: "5%" }}>
            <div className="ABSCONMOBILE col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div
                className="SEPLINE"
                style={{ borderTop: "0.5px solid black", width: "90%" }}
              ></div>
              <p style={{ overflowWrap: "break-word" }} className="ABSTEXT">
                Abstract format download from here. <br />
              </p>
              <a
                href={AbsTemp}
                download="ABSTRACT FORMAT"
                target="_blank"
                className="ABSBUTTONMOBILEFIX"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                <button
                  className="ABSTEXT btn btn-outline-dark BUTTONTABVIEW"
                  type="submit"
                >
                  DOWNLOAD ABSTRACT FORMAT
                </button>
              </a>
            </div>
            <div className="ABSCONMOBILE col-xs-12 col-sm-6 col-md-6 col-lg-4 ABSTEXT">
              <div
                className="SEPLINE"
                style={{ borderTop: "0.5px solid black", width: "90%" }}
              ></div>
              <p>
                For abstract submission and followup
                <br />
              </p>
              <a
                href="https://cmt3.research.microsoft.com/ICSPT2023/"
                target="_blank"
                className="ABSBUTTONMOBILEFIX"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                <button className=" ABSTEXT btn btn-outline-dark BUTTONTABVIEW">
                  SUBMIT ABSTRACT
                </button>
              </a>
            </div>
            <div className="  col-xs-12 col-sm-6 col-md-6 col-lg-4 ABSCONMOBILE ABSTEXT">
              <div
                className="SEPLINE"
                style={{ borderTop: "0.5px solid black", width: "90%" }}
              ></div>
              For instructions regarding abstract submission, please see this
              document.
              <br />
              <a
                href={CMT}
                target="_blank"
                className="ABSBUTTONMOBILEFIX"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                <button className=" ABSTEXT btn btn-outline-dark BUTTONTABVIEW">
                  DOCUMENT
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
