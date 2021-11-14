import React from "react";

const SkillsetSection = ({ skills }) => {
  return (
    <div className="box-shadow rounded m-4 p-3">
      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">Software development</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.software_development.map((tech, index) => (
                <li key={index}>
                  <span className="fw-bold">-</span> {tech}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">Web development</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.web_development.map((tech, index) => (
                <li key={index}>
                  <span className="fw-bold">-</span> {tech}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">Database administration</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.database_administration.map((tech, index) => (
                <li key={index}>
                  <span className="fw-bold">-</span> {tech}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">Dev tools</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.dev_tools.map((tech, index) => (
                <li key={index}>
                  <span className="fw-bold">-</span> {tech}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">Computer networking</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.computer_networking.map((tech, index) => (
                <li key={index}>
                  <span className="fw-bold">-</span> {tech}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">Languages</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.languages.map((language, index) => (
                <li key={index}>
                  <span className="fw-bold">-</span> {language}
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default SkillsetSection;
