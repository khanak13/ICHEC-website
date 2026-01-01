import React from "react";

// 📸 Heritage images (from src)
import golghar from "../../assets/patna/golghar.jpg";
import museum from "../../assets/patna/patnamuseum.jpg";
import ganga from "../../assets/patna/gangaghat.jpg";
import bodhgaya from "../../assets/patna/bodhgaya.jpg";

function TravelPatna() {
  const imageStyle = {
    width: "100%",
    height: "220px",
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
        <h2 className="mb-4 text-center">Travel Information – Patna</h2>

        <p className="lead text-center mb-5">
          Patna, historically known as <strong>Pataliputra</strong>, is one of the
          oldest continuously inhabited cities in the world. It blends ancient
          heritage with modern academic and cultural significance.
        </p>

        {/* GOOGLE MAP */}
        <div className="mb-5">
          <h4 className="mb-3">📍 IIT Patna (Bihta Campus)</h4>
          <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            <iframe
              title="IIT Patna Map"
              src="https://www.google.com/maps?q=IIT%20Patna%20Bihta&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* HOW TO REACH */}
        <div className="mb-5">
          <h4 className="mb-3">✈️🚆 How to Reach IIT Patna</h4>

          <div className="card-simple">
            <p>
              <strong>✈️ By Air:</strong> Jay Prakash Narayan International
              Airport, Patna (PAT) is well connected to major Indian cities.
            </p>
            <p>
              <strong>Distance to IIT Patna:</strong> ~35 km (1–1.5 hrs by taxi)
            </p>

            <p>
              <strong>🚆 By Rail:</strong> Patna Junction (PNBE) and Danapur (DNR)
              are the nearest major railway stations.
            </p>
            <p className="mb-0">
              <strong>🛣️ By Road:</strong> Easily accessible via national
              highways, taxis, and app-based cab services.
            </p>
          </div>
        </div>

        {/* DISTANCE CARDS */}
        <div className="mb-5">
          <h4 className="mb-3">📏 Distance Overview</h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            <div className="card-simple text-center">
              ✈️ Airport → IIT Patna
              <p className="mb-0 mt-2">~35 km</p>
            </div>
            <div className="card-simple text-center">
              🚆 Patna Junction → IIT Patna
              <p className="mb-0 mt-2">~30 km</p>
            </div>
            <div className="card-simple text-center">
              🚆 Danapur Station → IIT Patna
              <p className="mb-0 mt-2">~25 km</p>
            </div>
          </div>
        </div>

        {/* HERITAGE SECTION */}
        <div>
          <h4 className="mb-4">🏛️ Explore the Heritage of Patna</h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            <div className="card-simple">
              <img src={golghar} alt="Golghar" style={imageStyle} />
              <h6 className="mt-3">Golghar</h6>
              <p className="small">
                An iconic 18th-century granary offering panoramic views of Patna
                and the Ganga river.
              </p>
            </div>

            <div className="card-simple">
              <img src={museum} alt="Patna Museum" style={imageStyle} />
              <h6 className="mt-3">Patna Museum</h6>
              <p className="small">
                A treasure trove of ancient artifacts, sculptures, and
                archaeological finds.
              </p>
            </div>

            <div className="card-simple">
              <img src={ganga} alt="Ganga Ghats" style={imageStyle} />
              <h6 className="mt-3">Ganga River Ghats</h6>
              <p className="small">
                Experience serene riverfront views and cultural life along the
                holy Ganga.
              </p>
            </div>

            <div className="card-simple">
              <img src={bodhgaya} alt="Bodh Gaya" style={imageStyle} />
              <h6 className="mt-3">Bodh Gaya</h6>
              <p className="small">
                A UNESCO World Heritage Site and the place of Buddha’s
                enlightenment (≈100 km from Patna).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TravelPatna;
