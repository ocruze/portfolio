import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const ExperienceCard = (props) => {
  const { t } = useTranslation();

  return (
    <div className="box-shadow rounded m-4 p-3">
      <div className="row">
        <div className="col-lg-4">
          <p className="fw-bold fs-5 text-primary">
            {props.start} - {props.end || t("pages.resume.experience_present")}
          </p>
          <p className="fw-bold">{t(`pages.resume.experience.${props.slug}.job_title`)}</p>
          <p>{props.employer}</p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-success" />
            &nbsp;
            {props.employer_location}
          </p>
          {props.employer_linkedin ? (
            <p>
              <a href={props.employer_linkedin} className="btn btn-link p-0" aria-label="linkedin profile link">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {Array.from({ length: props.tasks_num }, (value, index) => (
                <li key={index}>{t(`pages.resume.experience.${props.slug}.tasks.${index + 1}`)}</li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
