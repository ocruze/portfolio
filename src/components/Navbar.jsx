import React from "react";
import * as fas from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const routes = [
    {
      name: "",
      url: "",
    },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-md m-3">
        <div className="container-xl">
          <a
            className="navbar-brand ff-poppins fs-2 fw-bold text-dark"
            href="#"
          >
            <FontAwesomeIcon icon={fas.faSquare} className="text-primary" />
            &nbsp;Orka Arnest Cruze <span className="fw-normal">/</span>
            <span className="fw-normal fst-italic fs-4">Junior Developer</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Resume
              </a>
              <a className="nav-link" href="#">
                Projects
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
