import React from "react";

function IndustryPatron() {
  return (
    <section>
      <div
        className="container"
        style={{ paddingTop: "100px", maxWidth: "1100px" }}
      >
        {/* Title */}
        <h2 className="mb-4 text-center">Become a sponsor</h2>

        <p className="lead text-center mb-5">
          ICHEC 2026 offers an excellent platform for industries, startups, and
          organizations to showcase innovations, engage with academic leaders,
          and connect with talented students and researchers in chemical and
          allied engineering domains.
        </p>

        {/* WHY SPONSOR */}
        <div className="mb-5">
          <h4 className="mb-3">🤝 Why Partner with ICHEC 2026?</h4>

          <div className="card-simple">
            <ul style={{ lineHeight: "1.9" }}>
              <li>
                🌍 <strong>Enhanced Brand Visibility:</strong> Showcase your
                brand to a diverse audience of academicians, industry experts,
                researchers, and students.
              </li>
              <li>
                🏭 <strong>Industry–Academia Collaboration:</strong> Engage with
                faculty and researchers from IIT Patna and other leading
                institutions.
              </li>
              <li>
                🎯 <strong>Targeted Outreach:</strong> Reach professionals and
                students working in sustainability, green energy, chemical and
                biochemical engineering.
              </li>
              <li>
                🧠 <strong>Talent Identification:</strong> Interact with highly
                skilled students and researchers for recruitment and
                internships.
              </li>
              <li>
                📢 <strong>Product & Technology Promotion:</strong> Demonstrate
                products, services, and cutting-edge technologies.
              </li>
            </ul>
          </div>
        </div>

        {/* SPONSORSHIP BENEFITS */}
        <div className="mb-5">
          <h4 className="mb-3">⭐ Sponsorship & Exhibition Benefits</h4>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            <div className="card-simple">
              📣 <strong>Prominent Branding</strong>
              <p className="small mt-2">
                Logo placement on the conference website, banners, brochures,
                certificates, and promotional materials.
              </p>
            </div>

            <div className="card-simple">
              🏢 <strong>Exhibition Space</strong>
              <p className="small mt-2">
                Dedicated stalls to showcase products, technologies, and
                services during the conference.
              </p>
            </div>

            <div className="card-simple">
              🎤 <strong>Speaking Opportunities</strong>
              <p className="small mt-2">
                Opportunity to address delegates or participate in panel
                discussions (subject to sponsorship category).
              </p>
            </div>

            <div className="card-simple">
              🧾 <strong>Complimentary Registrations</strong>
              <p className="small mt-2">
                Free conference registrations for sponsor representatives.
              </p>
            </div>

            <div className="card-simple">
              📸 <strong>Media & Publicity</strong>
              <p className="small mt-2">
                Visibility through social media promotions, photographs, and
                post-conference reports.
              </p>
            </div>
          </div>
        </div>

        {/* SPONSORSHIP CATEGORIES */}
        <div className="mb-5">
          <h4 className="mb-3">🏆 Sponsorship Categories</h4>

          <div className="card-simple">
            <p>
              Sponsorship opportunities are available in multiple categories to
              suit diverse organizational goals:
            </p>
            <ul>
              <li>Platinum Sponsor</li>
              <li>Gold Sponsor</li>
              <li>Silver Sponsor</li>
              <li>Bronze Sponsor</li>
              <li>Exhibitor / Industry Partner</li>
            </ul>
            <p className="mb-0">
              Customized sponsorship packages can also be designed based on
              specific requirements.
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-3">📞 Contact for Sponsorship & Exhibition</h4>

          <div className="card-simple">
            <p>
              Organizations interested in becoming patrons or exhibitors are
              encouraged to contact the organizing committee for detailed
              sponsorship brochures and tailored proposals.
            </p>

            <p className="mb-1">
              📧 <strong>Email:</strong>{" "}
              <a href="mailto:ichec@iitp.ac.in">ichec@iitp.ac.in</a>
            </p>

            <p className="mb-0">
              📍 <strong>Address:</strong>
              <br />
              Department of Chemical & Biochemical Engineering
              <br />
              Indian Institute of Technology Patna
              <br />
              Bihta, Patna – 801106, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryPatron;
