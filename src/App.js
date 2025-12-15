import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

// pages
import Home from "./pages/Home";
import Registration from "./pages/Registration";


// About
import AboutOverview from "./pages/about/AboutOverview";
import AboutHistory from "./pages/about/AboutHistory";
import AboutCommittee from "./pages/about/AboutCommittee";
import AboutTrackChair from "./pages/about/AboutTrackChair";

// Program
import ProgramOverview from "./pages/program/ProgramOverview";
import ProgramSpeakers from "./pages/program/ProgramSpeakers";

// Travel
import TravelPatna from "./pages/travel/TravelPatna";
import TravelVisa from "./pages/travel/TravelVisa";

// Industry Ties
import IndustryPatron from "./pages/industry/IndustryPatron";
import IndustrySponsors from "./pages/industry/IndustrySponsors";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutOverview />} />
        <Route path="/about/history" element={<AboutHistory />} />
        <Route path="/about/committee" element={<AboutCommittee />} />
        <Route path="/about/track-chair" element={<AboutTrackChair />} />

        {/* Program */}
        <Route path="/program" element={<ProgramOverview />} />
        <Route path="/program/speakers" element={<ProgramSpeakers />} />

      {/* Travel */}
        <Route path="/travel/patna" element={<TravelPatna />} />
        <Route path="/travel/visa" element={<TravelVisa />} />

        {/* Industry */}
        <Route path="/industry/patron" element={<IndustryPatron />} />
        <Route path="/industry/sponsors" element={<IndustrySponsors />} />

        {/* Other */}
        <Route path="/registration" element={<Registration />} />
       
      </Routes>

      <footer>
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4">
              <h5 className="text-white">ICHEC 2026</h5>
              <p className="small">
                Dept. of Chemical &amp; Biochemical Engineering
                <br />
                Indian Institute of Technology Patna
                <br />
                Bihta, Patna — 801106
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="text-white">Contact</h6>
              <p className="small mb-1">
                Email: <a href="mailto:ichec@iitp.ac.in">ichec@iitp.ac.in</a>
              </p>
              <p className="small mb-0">Phone: +91 612 302 5000</p>
            </div>
            <div className="col-md-4 text-md-end">
              <img
                src="/assets/iitp-footer.png"
                alt="iitp"
                style={{ maxHeight: "80px" }}
              />
              <div className="mt-3 small">
                © 2026 Dept. of Chemical &amp; Biochemical Engineering — IIT
                Patna
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
