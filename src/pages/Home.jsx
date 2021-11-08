import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fab from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md col-xl-4">
            <div className="row bg-lightblue">
              <img src="https://picsum.photos/300/300" alt="" />
              <h3>Orka Arnest CRUZE</h3>
              <hr />
              <p>Junior Developer</p>
            </div>
            <div className="row">
              <div className="d-flex justify-content-center mt-2">
                <FontAwesomeIcon
                  icon={fab.faLinkedinIn}
                  className="fs-2 me-3"
                />
                <FontAwesomeIcon icon={fab.faGithub} className="fs-2" />
              </div>
            </div>
          </div>
          <div className="col-md col-xl-4">
            <h1 className="ff-poppins">Hello</h1>
            <h2>Here's who I am & what I do</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
