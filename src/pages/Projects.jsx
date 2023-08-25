import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/Cards/ProjectCard";

import projects from "../data/projects.json";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="row px-4">
        <h1 className="ff-poppins fw-bold">{t(`pages.projects.title`)}</h1>
      </div>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </>
  );
};

export default Projects;
