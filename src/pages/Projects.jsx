import React from "react";
import ProjectCard from "../components/Cards/ProjectCard";

import projects from "../data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="row px-4">
        <h1 className="ff-poppins fw-bold">Projects</h1>
      </div>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </>
  );
};

export default Projects;
