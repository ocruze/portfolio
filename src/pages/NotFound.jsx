import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="container text-center">
            <h2>{t("pages.not_found.heading")}</h2>
            <p className="fs-5">
                <Link to="/" className="btn btn-primary py-2">
                    <FontAwesomeIcon icon={faHome} />
                    &nbsp;{t("pages.not_found.homepage_link_text")}
                </Link>
            </p>
        </div>
    );
};

export default NotFound;
