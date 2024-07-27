import React from "react";
import Tag from "./Tag";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/constants";

const Experience = () => {
  return (
    <div className="bg-bgSecondary md:px-[3rem] px-[1rem] py-[3rem]" id="work">
      <div className="flex flex-col items-center gap-5">
        <Tag text="Experience" />
        <p className="text-subtitleColor text-xl">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex-col justify-center m-[2rem_0_0_0]">
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
    </div>
  );
};

export default Experience;
