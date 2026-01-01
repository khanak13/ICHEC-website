import React from "react";

function AboutCommittee() {
  // You can keep adding members here
  const chiefPatron = {
    name: "Prof. T. N. Singh",
    role: "Chief Patron",
    designation: "Director, Indian Institute of Technology Patna",
    image: "/committee/director-tn-singh.jpg",
  };

  const committeeMembers = [
    {
      name: "Dr. A. B. Example",
      role: "Conference Chair",
      designation: "IIT Patna",
      image: "/committee/member1.jpg",
    },
    {
      name: "Dr. C. D. Example",
      role: "Organizing Secretary",
      designation: "IIT Patna",
      image: "/committee/member2.jpg",
    },
  ];

  const cardStyle = {
    textAlign: "center",
    padding: "20px",
    borderRadius: "14px",
    background: "var(--surface)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
  };

  const imageStyle = {
    width: "140px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "15px",
  };

  return (
    <section>
      <div
        className="container"
        style={{ paddingTop: "100px", maxWidth: "1100px" }}
      >
        {/* Title */}
        <h2 className="mb-5 text-center">Organizing Committee</h2>

        {/* Chief Patron */}
        <div className="mb-5">
          <h4 className="text-center mb-4">Chief Patron</h4>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ ...cardStyle, maxWidth: "320px" }}>
              <img
                src={chiefPatron.image}
                alt={chiefPatron.name}
                style={imageStyle}
              />
              <h5 className="mb-1">{chiefPatron.name}</h5>
              <p className="mb-1">
                <strong>{chiefPatron.role}</strong>
              </p>
              <p className="small mb-0">{chiefPatron.designation}</p>
            </div>
          </div>
        </div>

        {/* Other Committee Members */}
        <div>
          <h4 className="text-center mb-4">Organizing Committee</h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "30px",
            }}
          >
            {committeeMembers.map((member, index) => (
              <div key={index} style={cardStyle}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={imageStyle}
                />
                <h6 className="mb-1">{member.name}</h6>
                <p className="mb-1">
                  <strong>{member.role}</strong>
                </p>
                <p className="small mb-0">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCommittee;
