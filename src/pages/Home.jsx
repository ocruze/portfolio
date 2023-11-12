import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="row justify-content-center">
            <div className="col-md-4 col-xl-4 box-shadow">
                <div className="row bg-lightblue justify-content-center text-center">
                    <img
                        src="/static/images/ben-sweet-2LowviVHZ-E-unsplash-square.jpg"
                        alt="avatar"
                        className="rounded-circle w-auto m-5"
                    />
                    <h3 className="ff-poppins fw-bold">{t("my_info.full_name")}</h3>
                    <p className="fw-bold my-4">{t("my_info.job_title")}</p>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center my-2">
                        <a
                            href="https://www.linkedin.com/in/o-a-cruze"
                            className="btn btn-link link-dark me-3"
                            aria-label="linkedin profile link"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} className="fs-3" />
                        </a>
                        <a
                            href="https://github.com/ocruze"
                            className="btn btn-link link-dark"
                            aria-label="github profile link"
                        >
                            <FontAwesomeIcon icon={faGithub} className="fs-3" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md col-xl-6 p-5 py-4">
                <h1 className="ff-poppins fw-bold fa-4x">{t("pages.home.hello")}</h1>
                <h2 className="ff-poppins fa-2x fs-5 mb-5">{t("pages.home.about_me_heading")}</h2>

                <Link to="/resume" className="text-uppercase btn btn-primary rounded-pill text-light fw-bold me-2 px-3">
                    {t("pages.home.link_texts.resume")}
                </Link>
                <Link to="/projects" className="text-uppercase btn btn-outline-dark rounded-pill fw-bold px-3">
                    {t("pages.home.link_texts.projects")}
                </Link>

                <p className="mt-3 lead">{t("pages.home.lead_text")}</p>
                <p>{t("pages.home.sublead_text")}</p>
            </div>
        </div>
    );
};

export default Home;
