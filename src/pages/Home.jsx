import * as fab from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md col-xl-4 hero-card">
          <div className="row bg-lightblue justify-content-center text-center">
            <img
              src="https://picsum.photos/300/300"
              alt="avatar"
              className="rounded-circle w-auto m-5"
            />
            <h3 className="ff-poppins fw-bold">Orka Arnest CRUZE</h3>
            <p className="fw-bold my-4">Junior Developer</p>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center my-2">
              <a
                href="https://www.linkedin.com/in/o-a-cruze"
                className="btn btn-link link-dark me-3"
              >
                <FontAwesomeIcon icon={fab.faLinkedinIn} className="fs-3" />
              </a>
              <a
                href="https://github.com/ocruze"
                className="btn btn-link link-dark"
              >
                <FontAwesomeIcon icon={fab.faGithub} className="fs-3" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md col-xl-4 p-5 py-4">
          <h1 className="ff-poppins fa-6x fw-bold">Hello</h1>
          <h2 className="ff-poppins fs-4 mb-5">Here's who I am & what I do</h2>

          <Link
            to="/resume"
            className="text-uppercase btn btn-primary rounded-pill text-light fw-bold me-2 px-3"
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="text-uppercase btn btn-outline-dark rounded-pill fw-bold px-3"
          >
            Projects
          </Link>

          <p className="mt-3">
            I'm studying IT at the engineering school ESIEA and I'm an
            apprentice developer at IGN.
          </p>
          <p>
            I've started my journey in programming about 4 years ago and I was
            hooked ever since. Even though I have started with native
            technologies such as Java or Python, I've got a new-found interest
            in web development. Currently, I'm teaching myself Javascript
            technologies like vue.js or react.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
