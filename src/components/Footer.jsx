import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-xl ff-poppins py-3 my-4 border-top">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
            <p className="text-muted">
              © {new Date().getFullYear()} Orka Arnest Cruze
            </p>
          </div>

          <div className="col-md-8 row row-cols-1 row-cols-sm-auto justify-content-center justify-content-md-end">
            <div className="col text-center">
              <p className="fw-bold">Call me</p>
              <a
                href="tel:0033618765806"
                className="btn btn-link text-decoration-none text-black"
              >
                06 18 76 58 06
              </a>
            </div>

            <div className="col text-center">
              <p className="fw-bold">Email me</p>
              <a
                href="mailto:o.cruze@live.com"
                className="btn btn-link text-decoration-none text-black"
              >
                o.cruze@live.com
              </a>
            </div>
            <div className="col text-center">
              <p className="fw-bold">Follow me</p>
              <a
                href="https://www.linkedin.com/in/o-a-cruze"
                className="btn btn-link link-dark px-1"
                aria-label="linkedin profile link"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://github.com/ocruze"
                className="btn btn-link link-dark px-1"
                aria-label="github profile link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
