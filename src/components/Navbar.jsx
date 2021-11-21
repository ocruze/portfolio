import { faBars, faGlobe, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../i18n";

const languages = {
  en: "English",
  fr: "Français",
};

const Navbar = () => {
  const { t } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.resolvedLanguage || "en"
  );

  return (
    <>
      <nav className="navbar navbar-expand-md m-3">
        <div className="container-xl">
          <Link
            to="/"
            className="navbar-brand ff-poppins fs-2 fw-bold text-dark"
          >
            <FontAwesomeIcon icon={faSquare} className="text-primary" />
            &nbsp;{t("my_info.full_name")}.
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
            aria-controls="navmenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">
                {t("navbar.action_texts.home")}
              </Link>
              <Link className="nav-link" to="/resume">
                {t("navbar.action_texts.resume")}
              </Link>
              <Link className="nav-link" to="/projects">
                {t("navbar.action_texts.projects")}
              </Link>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-link link-primary dropdown-toggle"
                type="button"
                id="language-selector"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                title={t("navbar.action_texts.change_language")}
              >
                <FontAwesomeIcon icon={faGlobe} />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-md-end"
                aria-labelledby="language-selector"
              >
                <li>
                  <h6 class="dropdown-header">
                    {t("navbar.action_texts.change_language")}
                  </h6>
                </li>
                {Object.keys(languages).map((lang) => (
                  <li>
                    <button
                      className={
                        "dropdown-item" +
                        (lang == currentLanguage ? " active" : "")
                      }
                      type="button"
                      aria-current={lang == currentLanguage ? "true" : "false"}
                      onClick={() => {
                        setCurrentLanguage(lang);
                        i18n.changeLanguage(lang);
                      }}
                    >
                      {languages[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
