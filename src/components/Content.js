import React from "react";
import PhotoComp from "../documents/Photography competiton.pdf";
import ConfBroc from "../documents/ICSPT Brochure.pdf";
export default function Content() {
  return (
    <div className="">
      <div className="back1s">
        <div className="">
          <div className="he1 text-center fs-3 p-2">About the Conference</div>
          <div className="ABSTEXT  p-2">
           Chemical and allied engineering fields play a vital role in developing sustainable solutions for the future. Chemical manufacturing, waste management process, and energy production plays a key role in achieving the Sustainable Development Goals set by the world nations. This conference aims to awaken chemical engineers and related fraternity to the needs of sustainable engineering and the role that they can perform in shaping the future of our planet.
The main objectives of the conference are:

- To disseminate the knowledge about the latest technology and industrial practices to overcome the ever-increasing challenge of environmental pollution and climate change.

- To disseminate the scope of green energy in this context to counter these challenges to have a cleaner and greener environment.

- To showcase the latest product from industry in the industrial exhibition session.

- To foster positive interaction among delegates from industry, academia and other connected fields which may emanate collaborative research works.

- To learn and receive guidance from national and international level eminent keynote speakers on the theme of the conference.
            <ul>
              <li>To learn and receive guidance from national and international level eminent keynote speakers on the theme of the conference.</li>
              <li>Agrochemical Industry</li>
              <li>Food Industry</li>
            </ul>
            The conference will provide a platform to bring together
            academicians, industrialists, and entrepreneurs working in the above
            areas to share their knowledge. The conference will also witness a
            pre-conference workshop and an agro-processing startup meet. The
            workshop will focus on advanced research methodologies and
            analytical tools used in separation and purification processes.
          </div>
        </div>
      </div>
      {/* <div className="back1s">
        <div className="">
          <div className="he1 text-center p-2 fs-3">
            <br></br>Pre-conference Workshop
          </div>
          <div className=" ABSTEXT p-2">
            The workshop will focus on the research and analytical techniques
            utilized in downstream separation processes. The sessions will be
            handled by experts from academic and industrial organizations. A
            hands-on session on the application of Design of Experiments (DoE),
            preparation of research proposals, and commercialization of research
            would be useful for all research scholars, beyond the theme of the
            conference. The details of the session topics and speakers will be
            updated shortly on the website. The number of seats for the
            pre-conference workshop would be limited and the registrations will
            be approved on a first-cum-first-serve basis.
            <br></br>
            <br></br>
          </div>
        </div>
      </div> */}
      <div className="back1s">
        <div className="">
          <div className="he1 text-center p-2 fs-3">
            Agro-processing Startup Meet
          </div>
          <div className=" ABSTEXT p-2">
            Startups play a major role in the translation of research for the
            benefit of the general public. The startup ecosystem is also an
            overlooked career opportunity for research scholars in India.
            Hosting a startup session along with the technical conference aims
            at bridging the gap between research and startups. While startups
            can benefit from recent technological developments, researchers can
            secure an opportunity to work closely on translating their knowledge
            base for marketable outputs.
          </div>
        </div>
      </div>

      <div className="back1s">
        <div className="">
          <div className="he1 text-center p-2 fs-3">
            <br></br>Research Photography Competition
          </div>
          <div className=" ABSTEXT p-2">
            The event will also include a research photography competition.
            Images related to research, taken with a microscope or normal camera
            may be submitted through the link provided below. Submissions may
            include experimental setups, laboratories, equipment, microscopic
            images, etc. The photographs need not be directly related to the
            theme of the conference. Only original images taken by the
            competitors who retain the copyright of the image will be considered
            for the competition.
            <br />
            <div className="ABSTEXT mt-5 ABSMOBILEBUTTONCLASS1">
              For more details, please refer
            </div>
            <div class="ABSMAINCONT">
              <div className="ABSMOBILEBUTTONCLASS1">
                <a
                  href={PhotoComp}
                  download="PHOTOGRAPHY COMPETITION"
                  target="_blank"

                  rel="noreferrer"
                >
                  <button
                    className="ABSTEXT btn btn-outline-dark BUTTONTABVIEW position-relative"
                    type="submit"
                  >
                    PHOTOGRAPHY COMPETITION
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                        New!
                      </span>
                  </button>
                </a>
              </div>

              <div className="ABSMOBILECONT">
                <div className="ABSMOBILEBUTTONCLASS2">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeX-yFZCREtThX-Yzimfnwjr52CMFplxSJKWzTu3YH2vO7Ang/viewform?usp=pp_url"
                    target="_blank" rel="noreferrer"
                  >
                    <button className="ABSTEXT btn btn-outline-dark BUTTONTABVIEW">
                      SUBMIT YOUR IMAGES
                    </button>
                  </a>
                </div>
                <div className="ABSMOBILEBUTTONCLASS2">
                  <a href={ConfBroc} download="ICSPT BROCHURE" target="_blank" rel="noreferrer">
                    <button
                      className="ABSTEXT btn btn-outline-dark BUTTONTABVIEW position-relative"
                      type="submit"
                    >
                      CONFERENCE BROCHURE
                      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                        New!
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="back1"><div className="container"><div className="hea1 text-center p-2 fs-3">IIT Patna</div>
        <div className="he2 p-2 fs-5">
          IIT Patna is a premier educational and research institute in India that was established on 6th August 2008. Currently, IIT Patna has six engineering and three science departments along with a department of humanities and social sciences. There are over three thousand five hundred students and over three fifty staff and faculty members on campus. The institute routinely hosts several international and national seminars, conferences, and other technical meetings to promote research in various fields.
          The campus is located in pristine land just about 35 km away from the main Patna city and airport. It is well connected by roadways to the city and other destinations such as Bodh Gaya, Rajgir, and Nalanda.
          For more details about the institute, please visit the institute website <a target="_blank" rel="noopener noreferrer" href="https://www.iitp.ac.in/" className="link-light">here</a>.

      </div></div></div>

      <div className="back2"><div className="container"><div className="he1 text-center p-2 fs-3"><br></br>About Chemical and Biochemical Engineering Department</div>
        <div className="ABSTEXTp-2 fs-5">
          The Chemical and Biochemical Engineering department of IITP was instituted in the year 2014. The department presently offers Bachelor of Technology, Master of Technology by Research, and Doctor of Philosophy degrees in Chemical Engineering. These programs aim to develop highly-qualified, self-motivated graduates who are independent and open-minded individuals capable of contributing to the industry, academia, and research and development programs.
          Currently, the department has 8 faculty members who are eager to contribute innovative solutions to meet societal needs. The department has established well-equipped laboratories for teaching and research purposes. The facilities in the department are focused on experiments and simulations applicable to various sectors like energy, specialty chemicals, materials, and waste management. Over 20 Ph.D. research scholars, 180 UG students, and around 100 alumni are proud members of the department. For more details, please click <a href="https://www.iitp.ac.in/index.php/departments/engineering-technology/chemical-and-biochemical-engineering" target="_blank" rel="noopener noreferrer" className="link-dark">Click here.</a><br></br><br></br>
        </div></div></div> */}
    </div>
  );
}
