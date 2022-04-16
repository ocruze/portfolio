import React from "react";
import ExperienceCard from "../components/Cards/ExperienceCard";
import EducationCard from "../components/Cards/EducationCard";

import experience from "./../data/experience.json";
import education from "./../data/education.json";
import skills from "./../data/skills.json";
import SkillsetSection from "../components/SkillsetSection";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="row px-4">
        <h1 className="ff-poppins fw-bold">{t("pages.resume.title")}</h1>
      </div>

      <div className="row">
        <section>
          <h2 className="ff-poppins text-center">
            {t("pages.resume.title_experience")}
          </h2>

          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </section>
      </div>

      <div className="row">
        <section>
          <h2 className="ff-poppins text-center">
            {t("pages.resume.title_education")}
          </h2>

          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </section>
      </div>

      <div className="row">
        <section>
          <h2 className="ff-poppins text-center">
            {t("pages.resume.title_skillset")}
          </h2>

          <SkillsetSection skills={skills} />
        </section>
      </div>
    </>
  );
};

export default Resume;
