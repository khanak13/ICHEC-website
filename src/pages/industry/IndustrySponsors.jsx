import React from "react";

// ✅ Placeholder image (used until real logos are available)
import placeholder from "../../assets/sponsors/placeholder.png";

function IndustrySponsors() {
  // You can add/edit sponsors later here
  const sponsors = [
    {
      name: "Platinum Sponsor",
      organization: "To Be Announced",
      image: placeholder,
    },
    {
      name: "Gold Sponsor",
      organization: "To Be Announced",
      image: placeholder,
    },
    {
      name: "Silver Sponsor",
      organization: "To Be Announced",
      image: placeholder,
    },
    {
      name: "Industry Partner",
      organization: "To Be Announced",
      image: placeholder,
    },
  ];

  const cardStyle = {
    background: "var(--surface)",
    padding: "24px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 14px 35px rgba(0,0,0,0.45)",
  };

  const imageStyle = {
    width: "160px",
    height: "100px",
    objectFit: "contain",
    marginBottom: "16px",
    opacity: 0.7,
  };

  return (
    <section>
      <div
        className="container"
        style={{ paddingTop: "100px", maxWidth: "1100px" }}
      >
        {/* Title */}
        <h2 className="mb-4 text-center">Sponsors & Partners</h2>

        {/* Intro */}
        <p className="lead text-center mb-5">
          We sincerely thank our sponsors and industry partners for their
          support. Confirmed sponsors for ICHEC 2026 will be listed below.
        </p>

        {/* Sponsors Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "30px",
          }}
        >
          {sponsors.map((sponsor, index) => (
            <div key={index} style={cardStyle}>
              <img
                src={sponsor.image}
                alt={sponsor.organization}
                style={imageStyle}
              />
              <h6 className="mb-1">{sponsor.name}</h6>
              <p className="small mb-0">{sponsor.organization}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center mt-5 small">
          🔔 Sponsor logos and details will be updated as confirmations are
          received.
        </p>
      </div>
    </section>
  );
}

export default IndustrySponsors;
