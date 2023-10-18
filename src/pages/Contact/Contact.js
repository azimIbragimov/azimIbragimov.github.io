import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1 className="HeaderTitle">Contact</h1>
	  <div className="float-container">
	  <div className="float-subcontainer">
      <p className="normaltext">Phone: (813) 555-5555</p>
	  </div>
	  <div className="float-subcontainer">
      <p className="normaltext">Email: a.ibragimov@ufl.edu</p>
	  </div>
	  </div>
    </div>
  );
}

export default Contact;
