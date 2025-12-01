import React from "react";
import "./style/sponsors.css";

export default function Sponsors() {
  let about = [
    " is an emerging global oleochemical company with leadership in the Castor based specialty chemicals industry.",
    " ",
  ];
  let links = [["Jayant Agro-Organics Ltd.","http://www.jayantagro.com/"], ["SERB","#"]];
  return (
    <div className="sponsors-container">
      <div className="themehead text-center mt-0">Our Sponsors</div>
      <div className="d-flex justify-content-center flex-wrap">
        {Array(about.length) // You can change the number of sponsor items as needed
          .fill()
          .map((_, index) => (
            <div key={index} className="sponsor-item">
              <div
                href=""
                style={{
                  backgroundImage: `url(${require(`./images/sponsors/${
                    index + 1
                  }.jpeg`)})`,
                  backgroundSize: "100% 100%",
                }}
                className="blurredBG"
                
              >
                {about[index].length > 0 && (
                  <div className="parentBG">
                    <div className="content ABSTEXT "><a href={links[index][1]} style={{textDecoration:'none', fontWeight:'bolder', color:'black'}} target="_blank" rel="noreferrer">{links[index][0]}</a> {about[index]} </div>
                    <div className="bG"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
