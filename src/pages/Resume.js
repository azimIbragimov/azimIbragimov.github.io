import React from "react";
import "./Resume.css";


function Resume() {
  return (
    <div className="page">
      <h1 className="HeaderTitle">Resume</h1>
      <h2 className="NameTitle">Azim Ibragimov</h2>
      <h3 className="PositionTitle">Machine Learning Researcher</h3>
	<div className="pageContainer">
      <p className="normaltext">
        Astute Machine Learning Researcher with data-driven and
        technology-focused approach. Communicates clearly with stakeholders and
        builds consensus around well-founded models. Meticulous Data Scientist
        accomplished in compiling, transforming and analyzing complex
        information through software. Expert in machine learning and large
        dataset management. Demonstrated success in identifying relationships
        and building solutions to business problems.
      </p>
      <hr></hr>
      <h2 className="SubHeaderTitle">Work History</h2>
      <p className="CompanyTitle">Machine Learning Researcher</p>
      <p className="CompanyTitle">
        Institute For Artificial Intelligence, Tampa, Florida [Jan 2023 -
        Current]
      </p>
      <ul>
        <li className="normaltext">
          Developed gait recognition system using transformers and graph
          networks.
        </li>
        <li className="normaltext">
          Tested and evaluated systems, ensuring their accuracy and performance.
        </li>
        <li className="normaltext">
          Project received funding from National Science Foundation worth over 2M dollars.
        </li>
      </ul>
	<br></br>
      <p className="CompanyTitle">Machine Learning Scientist</p>
	<p className="CompanyTitle">

          University Of South Florida, Tampa, Florida [Mar 2022 - Jan 2023]
	  </p>
      <ul>
        <li className="normaltext">
          Developed and implemented fingerprint recognition systems, increasing
          their accuracy by 15%.
        </li>
        <li className="normaltext">
          Published scientific paper on fingerprint recognition, presenting
          findings at Cornell University.
        </li>
        <li className="normaltext">
          Launched open-source research project for developing fingerprint
          recognition research methods
        </li>
      </ul>
	<br></br>
      <p className="CompanyTitle">Data Science Project Team Leader</p>
      <p className="CompanyTitle">Microsoft, Tampa, Florida [Aug 2022 - December 2022]</p>
      <ul>
        <li className="normaltext">
          Partnered with Microsoft to create machine-learning based eyeglass
          recommendation system.
        </li>
        <li className="normaltext">
          Created own large 5 TB dataset and cleansed it to improve accuracy of
          system.
        </li>
        <li className="normaltext">Communicated technical information to variety of audiences.</li>
      </ul>
	</div>
    </div>
  );
}

export default Resume;
