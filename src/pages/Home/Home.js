import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="page">
        <div className="container">
          <div class="column page">
            <img src="logo.png" className="profile-img" alt="Profile" />
          </div>
          <div class="column page">
            <div className="NameTitle">
              <p>
                <b>Azim Ibragimov</b>
              </p>
            </div>
            <hr style={{ color: "white" }}></hr>
            <div class="normaltext" style={{ color: "gold" }}>
              <p>
                <b> University of Florida Computer Science Ph.D. Student</b>{" "}
              </p>
            </div>
            <p>
              <b>
                <div class="normaltext">
                  Conducted research on the applications of artificial
                  intelligence in fingerprints, gait, and gaze biometrics.
                  Collaborated with researchers and experts to develop
                  innovative solutions, analyze data, and contribute to the
                  scientific understanding of these subjects.{" "}
                </div>
              </b>
            </p>
          </div>
        </div>
        <div className="float-container">
          <Link to="/resume" className="float-subcontainer">
              Resume
          </Link>
          <Link to="/research" className="float-subcontainer">
              Research
          </Link>
          <Link to="/contact" className="float-subcontainer">
              Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
