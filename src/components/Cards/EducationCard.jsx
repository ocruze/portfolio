import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EducationCard = (props) => {
  return (
    <div className="box-shadow rounded m-4 p-3">
      <div className="row">
        <div className="col-lg-4">
          <p className="fw-bold fs-5 text-primary">
            {props.start} - {props.end || "Présent"}
          </p>
          <p className="fw-bold">{props.degree}</p>
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
              {props.course_details.map((item, index) => (
                <li key={index}>
                  <span className="fw-bold">-</span> {item}
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
