import React from "react";

function AboutOverview() {
  const blockStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
    marginBottom: "80px",
  };

  const imageStyle = {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "14px",
  };

  return (
    <section>
      <div
        className="container"
        style={{ paddingTop: "100px", maxWidth: "1100px" }}
      >
        {/* Title */}
        <h2 className="mb-5 text-center">Conference Overview</h2>

        {/* BLOCK 1 */}
        <div style={blockStyle}>
          <img
            src="/about/sustainability.jpg"
            alt="Sustainable Engineering"
            style={imageStyle}
          />
          <div>
            <h4>Engineering a Sustainable Future</h4>
            <p className="mt-3">
              Chemical and allied engineering disciplines lie at the heart of
              sustainable development. From cleaner manufacturing to efficient
              waste management, engineers play a critical role in shaping a
              greener future.
            </p>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div style={blockStyle}>
          <div>
            <h4>Green Energy & Climate Action</h4>
            <p className="mt-3">
              With rising concerns over climate change and environmental
              pollution, ICHEC 2026 focuses on innovative green energy solutions
              and technologies that enable a cleaner and more resilient world.
            </p>
          </div>
          <img
            src="/about/green-energy.jpg"
            alt="Green Energy"
            style={imageStyle}
          />
        </div>

        {/* BLOCK 3 */}
        <div style={blockStyle}>
          <img
            src="/about/collaboration.jpg"
            alt="Collaboration"
            style={imageStyle}
          />
          <div>
            <h4>Industry Meets Academia</h4>
            <p className="mt-3">
              ICHEC 2026 brings together industry experts, academicians,
              researchers, and students to exchange ideas, foster collaborations,
              and drive impactful research and innovation.
            </p>
          </div>
        </div>

        {/* CHEMATHON SECTION */}
        <div style={blockStyle}>
          <div>
            <h3>🔥 ICHEC Chemathon</h3>
            <p className="mt-3">
              Adding excitement to ICHEC 2026, the <strong>Chemathon</strong> is a
              competitive, problem-solving event designed to challenge young
              minds to think critically, innovate boldly, and apply chemical
              engineering principles to real-world problems.
            </p>

            <ul style={{ lineHeight: "1.8", marginTop: "16px" }}>
              <li>🧠 Real-world chemical engineering challenges</li>
              <li>⏱ Time-bound team-based problem solving</li>
              <li>🌍 Focus on sustainability & industrial relevance</li>
            </ul>
          </div>

          <img
            src="/about/chemathon.jpg"
            alt="Chemathon"
            style={imageStyle}
          />
        </div>

        {/* CHEMATHON PERKS */}
        <div className="card-simple mb-5">
          <h4 className="mb-4 text-center">Why Participate in the Chemathon?</h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            <div>
              🏆 <strong>Exciting Cash Prizes</strong>
              <p className="small mt-2">
                Win attractive cash prizes and certificates of excellence.
              </p>
            </div>

            <div>
              📜 <strong>Certificates</strong>
              <p className="small mt-2">
                All participants receive certificates recognized by IIT Patna.
              </p>
            </div>

            <div>
              🤝 <strong>Industry Exposure</strong>
              <p className="small mt-2">
                Get noticed by industry experts and academicians.
              </p>
            </div>

            <div>
              🚀 <strong>Skill Enhancement</strong>
              <p className="small mt-2">
                Improve problem-solving, teamwork, and analytical skills.
              </p>
            </div>
          </div>
        </div>

        {/* REGISTRATION DETAILS */}
        <div className="card-simple">
          <h4 className="mb-3 text-center">Chemathon Registration Details</h4>

          <div style={{ textAlign: "center", lineHeight: "1.8" }}>
            <p>
              👥 <strong>Team Size:</strong> 2–4 members
            </p>
            <p>
              💰 <strong>Registration Fee:</strong>
            </p>
            <p className="mb-1">
              • Students: <strong>₹500 per team</strong>
            </p>
            <p>
              • Professionals / Industry Participants:{" "}
              <strong>₹1000 per team</strong>
            </p>

            <p className="mt-3">
              🥇 <strong>Prizes:</strong> Cash awards for top teams + certificates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOverview;
