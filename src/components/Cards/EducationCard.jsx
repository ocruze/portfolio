import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

const EducationCard = (props) => {
    const { t } = useTranslation();

    return (
        <div className="box-shadow rounded m-4 p-3">
            <div className="row">
                <div className="col-lg-4">
                    <p className="fw-bold fs-5 text-primary">
                        {props.start} - {props.end || "Présent"}
                    </p>
                    <p className="fw-bold">{t(`pages.resume.education.${props.slug}.degree`)}</p>
                    <p>{props.school}</p>
                    <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-success" />
                        &nbsp;
                        {props.school_location}
                    </p>
                </div>
                <div className="col-lg-8 d-flex align-items-center">
                    {
                        <ul>
                            {Array.from({ length: props.course_details_num }, (value, index) => (
                                <li key={index}>
                                    {t(`pages.resume.education.${props.slug}.course_details.${index + 1}`)}
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default EducationCard;
