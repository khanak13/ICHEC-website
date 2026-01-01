import React from "react";

// ✅ Correct import (PNG)
import placeholder from "../../assets/speakers/placeholder.png";

function ProgramSpeakers() {
  const speakers = [
    {
      name: "Prof. A. B. Example",
      type: "Keynote Speaker",
      designation: "Professor of Chemical Engineering",
      institution: "Indian Institute of Technology Delhi",
      researchAreas: [
        "Sustainable Process Design",
        "Carbon Capture & Utilization",
        "Process Optimization",
      ],
      image: placeholder,
    },
    {
      name: "Dr. C. D. Example",
      type: "Invited Speaker",
      designation: "Senior Scientist",
      institution: "Council of Scientific & Industrial Research (CSIR)",
      researchAreas: [
        "Green Energy Systems",
        "Electrochemical Engineering",
      ],
      image: placeholder,
    },
    {
      name: "Dr. E. F. Example",
      type: "Invited Speaker",
      designation: "Principal Research Engineer",
      institution: "Industrial R&D Organization",
      researchAreas: [
        "Industrial Waste Management",
        "Sustainable Manufacturing",
      ],
      image: placeholder,
    },
  ];

  const cardStyle = {
    background: "var(--surface)",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 14px 35px rgba(0,0,0,0.45)",
    height: "100%",
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "16px",
  };

  return (
    <section>
      <div
        className="container"
        style={{ paddingTop: "100px", maxWidth: "1200px" }}
      >
        {/* Title */}
        <h2 className="mb-4 text-center">Speakers</h2>

        {/* Intro */}
        <p className="lead text-center mb-5">
          ICHEC 2026 brings together distinguished academicians, researchers,
          and industry leaders whose work is shaping the future of sustainable
          chemical engineering.
        </p>

        {/* Speakers Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {speakers.map((speaker, index) => (
            <div key={index} style={cardStyle}>
              <div className="text-center">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  style={imageStyle}
                />
              </div>

              <h6 className="mb-1 text-center">{speaker.name}</h6>

              <p className="text-center mb-1">
                <strong>{speaker.type}</strong>
              </p>

              <p className="small text-center mb-2">
                {speaker.designation}
                <br />
                {speaker.institution}
              </p>

              <hr />

              <p className="mb-1">
                <strong>Research Areas:</strong>
              </p>

              <ul className="small mb-0" style={{ paddingLeft: "18px" }}>
                {speaker.researchAreas.map((area, idx) => (
                  <li key={idx}>{area}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center mt-5 small">
          🔔 Additional keynote and invited speakers will be announced soon.
        </p>
      </div>
    </section>
  );
}

export default ProgramSpeakers;
