import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="container-xl">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className=" mb-0 text-muted">© Orka Arnest Cruze</p>

        <ul className="nav justify-content-end ff-poppins">
          <li className="nav-item text-center">
            <p className="fw-bold">Call me</p>
            <a
              href="tel:0033618765806"
              className="btn btn-link text-decoration-none text-black"
            >
              06 18 76 58 06
            </a>
          </li>
          <li className="nav-item text-center">
            <p className="fw-bold">Email me</p>
            <a
              href="mailto:o.cruze@live.com"
              className="btn btn-link text-decoration-none text-black"
            >
              o.cruze@live.com
            </a>
          </li>
          <li className="nav-item text-center">
            <p className="fw-bold">Follow me</p>
            <a
              href="https://www.linkedin.com/in/o-a-cruze"
              className="btn btn-link link-dark px-1"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/ocruze"
              className="btn btn-link link-dark px-1"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
