import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      

      <h1>Contact</h1>

      <div className="contact-details">
        <p>
          <strong>Convener:</strong><br />
          Dr. Sujoy Kumar Samanta
        </p>

        <p>
          Assistant Professor,<br />
          Department of Chemical and Biochemical Engineering,<br />
          Indian Institute of Technology, Patna<br />
          Bihta, Patna – 801103
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:sksamanta@iitp.ac.in">
            sksamanta@iitp.ac.in
          </a>
        </p>

        <p>
          <strong>Phone:</strong> +91-7033582467
        </p>

        <p>
          <strong>Conference Email:</strong><br />
          <a href="mailto:ichec2022@iitp.ac.in">
            ichec2022@iitp.ac.in
          </a>
          <br />
          <a href="mailto:icec2022iitp@gmail.com">
            icec2022iitp@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
