import React from "react";
import Tag from "./Tag";
import ProjectCard from "./ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div
      className="bg-bgPrimary md:px-[3rem] px-[1rem] py-[3rem]"
      id="projects"
    >
      <div className="flex justify-center">
        <Tag text="Projects" />
      </div>
      <div className="grid gap-10 m-[25px_0_0_0]">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            githubLink={project.source_code}
            imgUrl={project.img}
            liveLink={project.url}
            projectDescription={project.content}
            projectTitle={project.name}
            reverse={index % 2 == 0}
            techStack={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
