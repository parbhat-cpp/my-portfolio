import React from "react";
import Tag from "./Tag";
import { skills } from "@/constants";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="bg-bgPrimary md:px-[3rem] px-[1rem] py-[3rem]">
      <div className="flex flex-col items-center gap-5">
        <Tag text="Skills" />
        <p className="text-subtitleColor text-xl">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-12 m-[2.5rem_0_0_0]">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="md:w-auto w-[65px] md:h-auto h-[65px] text-center"
          >
            <Image alt={skill.name} height={80} src={skill.logo} width={80} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
