import React from "react";

import ExperienceCard from "./ExperienceCard";
import OpenSourceCard from "./OpenSourceCard";
import Tag from "./Tag";

import { experiences, openSourceContributions } from "@/constants";

const Experience = () => {
  return (
    <div className="bg-bgSecondary md:px-[3rem] px-[1rem] py-[3rem]" id="work">
      {/* Work Experience Section */}
      <div className="flex flex-col items-center gap-5">
        <Tag text="Experience" />
        <p className="text-subtitleColor text-xl">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center m-[2rem_0_0_0]">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.jobTitle}
            alt={experience.alt}
            employmentSpan={experience.employmentSpan}
            imgUrl={experience.imgUrl}
            jobDescription={experience.jobDescription}
            jobTitle={experience.jobTitle}
          />
        ))}
      </div>

      {/* Open Source Contributions Section */}
      <div className="flex flex-col items-center gap-5 m-[4rem_0_0_0]">
        <Tag text="Open Source" />
        <p className="text-subtitleColor text-xl">
          Contributing to the open-source community:
        </p>
      </div>
      <div className="flex flex-col gap-5 justify-center m-[2rem_0_0_0]">
        {openSourceContributions.map((contribution) => (
          <OpenSourceCard
            key={contribution.projectName}
            alt={contribution.alt}
            contributionDate={contribution.contributionDate}
            description={contribution.description}
            logoUrl={contribution.logoUrl}
            prLink={contribution.prLink}
            projectName={contribution.projectName}
            repositoryUrl={contribution.repositoryUrl}
            technologies={contribution.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
