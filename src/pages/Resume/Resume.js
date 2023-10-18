import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume_page">
      <h1 className="resume_HeaderTitle">Resume</h1>
      <h2 className="resume_NameTitle">Azim Ibragimov</h2>
      <h3 className="resume_PositionTitle">Machine Learning Researcher</h3>
	<div className="resume_pageContainer">
      <p className="resume_normaltext">
        Astute Machine Learning Researcher with data-driven and
        technology-focused approach. Communicates clearly with stakeholders and
        builds consensus around well-founded models. Meticulous Data Scientist
        accomplished in compiling, transforming and analyzing complex
        information through software. Expert in machine learning and large
        dataset management. Demonstrated success in identifying relationships
        and building solutions to business problems.
      </p>
      <hr></hr>
      <h2 className="resume_SubHeaderTitle">Work History</h2>
      <p className="resume_CompanyTitle">Machine Learning Researcher</p>
      <p className="resume_CompanyTitle">
        Institute For Artificial Intelligence, Tampa, Florida [Jan 2023 -
        Current]
      </p>
      <ul>
        <li className="resume_normaltext">
          Developed gait recognition system using transformers and graph
          networks.
        </li>
        <li className="resume_normaltext">
          Tested and evaluated systems, ensuring their accuracy and performance.
        </li>
        <li className="resume_normaltext">
          Project received funding from National Science Foundation worth over 2M dollars.
        </li>
      </ul>
	<br></br>
      <p className="resume_CompanyTitle">Machine Learning Scientist</p>
	<p className="resume_CompanyTitle">

          University Of South Florida, Tampa, Florida [Mar 2022 - Jan 2023]
	  </p>
      <ul>
        <li className="resume_normaltext">
          Developed and implemented fingerprint recognition systems, increasing
          their accuracy by 15%.
        </li>
        <li className="resume_normaltext">
          Published scientific paper on fingerprint recognition, presenting
          findings at Cornell University.
        </li>
        <li className="resume_normaltext">
          Launched open-source research project for developing fingerprint
          recognition research methods
        </li>
      </ul>
	<br></br>
      <p className="resume_CompanyTitle">Data Science Project Team Leader</p>
      <p className="resume_CompanyTitle">Microsoft, Tampa, Florida [Aug 2022 - December 2022]</p>
      <ul>
        <li className="resume_normaltext">
          Partnered with Microsoft to create machine-learning based eyeglass
          recommendation system.
        </li>
        <li className="resume_normaltext">
          Created own large 5 TB dataset and cleansed it to improve accuracy of
          system.
        </li>
        <li className="resume_normaltext">Communicated technical information to variety of audiences.</li>
      </ul>
	</div>
    </div>
  );
        }

export default Resume;
