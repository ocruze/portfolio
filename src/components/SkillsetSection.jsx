import React from "react";
import { useTranslation } from "react-i18next";

const SkillsetSection = ({ skills }) => {
  const { t } = useTranslation();

  return (
    <div className="box-shadow rounded m-4 p-3">
      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">{t(`pages.resume.skills.web_development`)}</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.web_development.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">{t(`pages.resume.skills.software_development`)}</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.software_development.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">{t(`pages.resume.skills.database_administration`)}</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.database_administration.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">{t(`pages.resume.skills.dev_tools`)}</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.dev_tools.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">{t(`pages.resume.skills.computer_networking`)}</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.computer_networking.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          }
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-4 d-flex align-items-center">
          <p className="fw-bold fs-5 text-primary">{t(`pages.resume.skills.languages`)}</p>
        </div>

        <div className="col-lg-8 d-flex align-items-center">
          {
            <ul>
              {skills.languages.map((language, index) => (
                <li key={index}>{t(`pages.resume.skills.${language}`)}</li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default SkillsetSection;
