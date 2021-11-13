import React from "react";
import * as fas from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md m-3">
        <div className="container-xl">
          <a
            className="navbar-brand ff-poppins fs-2 fw-bold text-dark"
            href="#"
          >
            <FontAwesomeIcon icon={fas.faSquare} className="text-primary" />
            &nbsp;Orka Arnest Cruze.
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
            <FontAwesomeIcon icon={fas.faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
