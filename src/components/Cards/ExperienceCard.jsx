import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ExperienceCard = (props) => {
  return (
    <div className="box-shadow rounded m-4 p-3">
      <div className="row">
        <div className="col-lg-4">
          <p className="fw-bold fs-5 text-primary">
            {props.start} - {props.end || "Present"}
          </p>
          <p className="fw-bold">{props.job_title}</p>
          <p>{props.employer}</p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-success" />
            &nbsp;
            {props.employer_location}
          </p>
        </div>
        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {props.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
