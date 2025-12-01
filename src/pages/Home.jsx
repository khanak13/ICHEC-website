// src/pages/Home.jsx
import React, { useEffect, useState } from "react";

function Home() {
  const [countdown, setCountdown] = useState("To be announced");

  useEffect(() => {
    // set your real conference start date here
    const targetDate = null; // e.g. new Date("2026-12-13T00:00:00");

    if (!targetDate) {
      setCountdown("To be announced");
      return;
    }

    function update() {
      const now = Date.now();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) {
        setCountdown("Conference started");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(`${days}d : ${hrs}h : ${mins}m : ${secs}s`);
    }

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center">
            {/* Left content */}
            <div className="col-lg-7 text-white">
              <h1 className="display-5">
                ICHEC 2026
                <br />
                <small className="text-white-50">
                  International Conference on Separation &amp; Purification
                  Technologies
                </small>
              </h1>
              <p className="mb-2">
                Organized by the Department of Chemical &amp; Biochemical
                Engineering — IIT Patna
              </p>
              <p className="mb-4">
                A premier forum for researchers, industry professionals and
                students to share advances in separation, catalysis, process
                intensification and biochemical engineering.
              </p>
              <a className="btn btn-register btn-lg me-2" href="/registration">
                Register
              </a>
              <a className="btn btn-outline-light btn-lg" href="/about">
                Learn More
              </a>
            </div>

            {/* Right emblem */}
            <div className="col-lg-5 text-lg-end d-none d-lg-block">
              <img
                src="/assets/ichec-emblem.png"
                alt="ICHEC emblem"
                style={{ maxWidth: 260 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT + KEY DATES / COUNTDOWN */}
      <section>
        <div className="container">
          <div className="row gy-4 align-items-start">
            <div className="col-lg-8">
              <h2>Welcome to ICHEC 2026</h2>
              <p className="lead">
                ICHEC 2026, hosted by IIT Patna, focuses on cutting-edge
                research in separation and purification technologies, catalysis,
                and sustainable process engineering. The conference aims to
                foster collaboration between academia and industry across the
                globe.
              </p>

              <div className="row g-3 mt-1">
                <div className="col-md-6">
                  <div className="card-simple">
                    <h6>Organized by</h6>
                    <p className="mb-0">
                      Department of Chemical &amp; Biochemical Engineering
                      <br />
                      Indian Institute of Technology Patna
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-simple">
                    <h6>Conference themes</h6>
                    <ul className="mb-0 small">
                      <li>Separation &amp; Purification Processes</li>
                      <li>Process Intensification &amp; Design</li>
                      <li>Biochemical &amp; Bioprocess Engineering</li>
                      <li>Sustainable &amp; Green Technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Key dates / countdown */}
            <div className="col-lg-4">
              <div className="countdown-box">
                <div className="countdown-label">Key dates</div>
                <ul className="small text-start mt-2 mb-3">
                  <li>Abstract submission: To be announced</li>
                  <li>Registration opens: To be announced</li>
                  <li>Conference dates: To be announced</li>
                </ul>
                <div className="countdown-label">Countdown to conference</div>
                <div className="countdown-value mt-1">{countdown}</div>
                <div className="small text-muted mt-1">
                  Days : Hours : Minutes : Seconds
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section>
        <div className="container">
          <h3>Explore ICHEC</h3>
          <div className="row g-3 mt-2">
            <div className="col-md-4">
              <div className="card-simple">
                <h5>Program &amp; Speakers</h5>
                <p className="small mb-3">
                  Discover keynotes, invited talks, and technical sessions.
                </p>
                <a href="/program" className="btn btn-outline-primary btn-sm">
                  View Program
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-simple">
                <h5>Travel &amp; Visa</h5>
                <p className="small mb-3">
                  Plan your visit to IIT Patna with travel and visa guidance.
                </p>
                <a
                  href="/travel/varanasi"
                  className="btn btn-outline-primary btn-sm"
                >
                  Travel Info
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-simple">
                <h5>Industry Ties</h5>
                <p className="small mb-3">
                  Learn how to partner with ICHEC as a sponsor or exhibitor.
                </p>
                <a
                  href="/industry/patron"
                  className="btn btn-outline-primary btn-sm"
                >
                  Industry Opportunities
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS STRIP */}
      <section style={{ paddingTop: 32, paddingBottom: 48 }}>
        <div className="container">
          <h4 className="mb-3">Patrons &amp; Sponsors</h4>
          <div className="row g-3 sponsors-row align-items-center">
            <div className="col-6 col-md-3 text-center">
              <img src="/assets/sponsor1.png" alt="Sponsor 1" />
            </div>
            <div className="col-6 col-md-3 text-center">
              <img src="/assets/sponsor2.png" alt="Sponsor 2" />
            </div>
            <div className="col-6 col-md-3 text-center">
              <img src="/assets/sponsor3.png" alt="Sponsor 3" />
            </div>
            <div className="col-6 col-md-3 text-center">
              <img src="/assets/sponsor4.png" alt="Sponsor 4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
