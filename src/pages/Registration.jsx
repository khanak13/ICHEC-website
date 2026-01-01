import React, { useState } from "react";

// QR placeholder (replace later with real QR)
import qrPlaceholder from "../assets/paytm/placeholder.png";

function Registration() {
  const [participantType, setParticipantType] = useState("student");
  const [hasMembership, setHasMembership] = useState("no");

  return (
    <section>
      <div
        className="container"
        style={{ paddingTop: "100px", maxWidth: "900px" }}
      >
        {/* TITLE */}
        <h2 className="mb-4 text-center">Conference Registration</h2>

        <p className="lead text-center mb-5">
          Register for ICHEC 2026 and be a part of an international platform
          bringing together academia, industry, and innovation in chemical and
          allied engineering.
        </p>

        {/* REGISTRATION FORM */}
        <div className="card-simple mb-5">
          <h4 className="mb-4">📝 Participant Details</h4>

          <form>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" required />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" required />
            </div>

            {/* Institution */}
            <div className="mb-3">
              <label className="form-label">Institution / Organization</label>
              <input type="text" className="form-control" />
            </div>

            {/* Participant Type */}
            <div className="mb-3">
              <label className="form-label">Participant Category</label>
              <select
                className="form-select"
                value={participantType}
                onChange={(e) => setParticipantType(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="academic">Academic / Faculty</option>
                <option value="industry">Industry Professional</option>
              </select>
            </div>

            {/* Membership */}
            <div className="mb-3">
              <label className="form-label">
                Do you have ICHEC Membership?
              </label>
              <select
                className="form-select"
                value={hasMembership}
                onChange={(e) => setHasMembership(e.target.value)}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </form>
        </div>

        {/* MEMBERSHIP PERKS */}
        {hasMembership === "no" && (
          <div className="card-simple mb-5">
            <h4 className="mb-3">🎖️ Become a Member & Save More</h4>
            <p>
              Registering as an ICHEC member provides exclusive benefits during
              registration and beyond.
            </p>

            <ul style={{ lineHeight: "1.8" }}>
              <li>💰 Special discounted registration fee</li>
              <li>📜 Priority access to certificates</li>
              <li>🎤 Early access to workshops & events</li>
              <li>🤝 Networking opportunities with experts</li>
            </ul>

            <p className="mb-0">
              👉 Membership can be selected during final registration.
            </p>
          </div>
        )}

        {/* REGISTRATION FEES */}
        <div className="card-simple mb-5">
          <h4 className="mb-3">💵 Registration Fees (Indicative)</h4>

          <ul style={{ lineHeight: "1.8" }}>
            <li>
              🎓 <strong>Students:</strong> ₹XXXX
            </li>
            <li>
              👩‍🏫 <strong>Academicians:</strong> ₹XXXX
            </li>
            <li>
              🏭 <strong>Industry Professionals:</strong> ₹XXXX
            </li>
            <li>
              ⭐ <strong>ICHEC Members:</strong> Special discounted rates
            </li>
          </ul>

          <p className="small mb-0">
            * Final fee structure will be announced soon.
          </p>
        </div>

        {/* PAYMENT SECTION */}
        <div className="card-simple mb-5">
          <h4 className="mb-3">📲 Payment via QR Code</h4>

          <p>
            Scan the QR code below to complete the registration payment. Please
            keep the payment receipt for verification.
          </p>

          <div className="text-center">
            <img
              src={qrPlaceholder}
              alt="QR Code for Payment"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
              }}
            />
          </div>

          <p className="text-center mt-3 small">
            (QR code will be updated with official payment details)
          </p>
        </div>

        {/* CONTACT */}
        <div className="card-simple">
          <h4 className="mb-3">📞 Registration Support</h4>

          <p className="mb-1">
            📧 Email:{" "}
            <a href="mailto:ichec@iitp.ac.in">ichec@iitp.ac.in</a>
          </p>
          <p className="mb-0">☎ Phone: +91 612 302 5000</p>
        </div>
      </div>
    </section>
  );
}

export default Registration;
