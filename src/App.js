import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

// pages
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";

// About
import AboutOverview from "./pages/about/AboutOverview";
import AboutHistory from "./pages/about/AboutHistory";
import AboutCommittee from "./pages/about/AboutCommittee";


// Program

import ProgramSpeakers from "./pages/program/ProgramSpeakers";

// Travel
import TravelPatna from "./pages/travel/TravelPatna";


// Industry
import IndustryPatron from "./pages/industry/IndustryPatron";
import IndustrySponsors from "./pages/industry/IndustrySponsors";

function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      <Navbar />

      {/* MAIN CONTENT */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<AboutOverview />} />
          <Route path="/about/history" element={<AboutHistory />} />
          <Route path="/about/committee" element={<AboutCommittee />} />
      

          {/* Program */}
      
          <Route path="/program/speakers" element={<ProgramSpeakers />} />

          {/* Travel */}
          <Route path="/travel/patna" element={<TravelPatna />} />
         

          {/* Industry */}
          <Route path="/industry/patron" element={<IndustryPatron />} />
          <Route path="/industry/sponsors" element={<IndustrySponsors />} />

          {/* Other */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer style={{ background: "#020617", padding: "3rem 0" }}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-4 text-light">
              <h5>ICHEC 2026</h5>
              <p className="small mb-0">
                Dept. of Chemical &amp; Biochemical Engineering
                <br />
                Indian Institute of Technology Patna
                <br />
                Bihta, Patna — 801106
              </p>
            </div>

            <div className="col-md-4 text-light">
              <h6>Contact</h6>
              <p className="small mb-1">
                Email:{" "}
                <a
                  href="mailto:ichec@iitp.ac.in"
                  style={{ color: "#d8e2ec", textDecoration: "none" }}
                >
                  ichec2026@iitp.ac.in
                </a>
              </p>
              <p className="small mb-0">Phone: +91 612 302 5000</p>
            </div>

            <div className="col-md-4 text-md-end">
              <img
                src="/iitplogo.png"
                alt="IIT Patna Logo"
                style={{
                  height: "80px",
                  background: "#ffffff00",
                  padding: "8px",
                  borderRadius: "6px",
                  display: "inline-block",
                }}
              />
              <div className="mt-3 small text-light">
                © 2026 IIT Patna
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
