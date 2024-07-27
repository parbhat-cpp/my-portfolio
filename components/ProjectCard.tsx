import Image from "next/image";
import React, { useEffect, useState } from "react";
import Tag from "./Tag";
import { GithubIcon, RedirectIcon } from "./icons";

interface IProjectCardProps {
  projectTitle: string;
  projectDescription: string;
  imgUrl: string;
  imgAlt?: string;
  techStack: Array<string>;
  githubLink?: string;
  liveLink?: string;
  reverse?: boolean;
}

const ProjectCard = (props: IProjectCardProps) => {
  const {
    projectTitle,
    projectDescription,
    imgUrl,
    imgAlt,
    techStack,
    githubLink,
    liveLink,
    reverse,
  } = props;

  const redirectToLink = (link: string) => {
    window.open(link);
  };

  return (
    <div
      className={`flex ${reverse ? "md:flex-row-reverse" : "md:flex-row"} flex-col max-w-[60rem] m-[0_auto]`}
    >
      <div
        className={`flex-1 bg-expCardBg2 p-[2.75rem] ${reverse ? "md:rounded-[0_12px_12px_0]" : "md:rounded-[12px_0_0_12px]"} rounded-[12px_12px_0_0]`}
      >
        <div className="flex justify-center items-center h-full w-full">
          <Image
            alt={`${imgAlt}`}
            className="rounded-xl"
            height={800}
            src={imgUrl}
            width={800}
          />
        </div>
      </div>
      <div
        className={`grid gap-5 flex-1 bg-expCardBg p-[2.75rem] ${reverse ? "md:rounded-[12px_0_0_12px]" : "md:rounded-[0_12px_12px_0]"} rounded-[0_0_12px_12px]`}
      >
        <h3 className="text-2xl text-titleColor">{projectTitle}</h3>
        <p className="text-subtitleColor">{projectDescription}</p>
        <div className="flex gap-x-5 gap-y-3 flex-wrap">
          {techStack.map((tech) => (
            <Tag key={tech} text={tech} />
          ))}
        </div>
        <div className="flex gap-3 text-subtitleColor">
          {liveLink && (
            <button onClick={() => redirectToLink(liveLink)}>
              <RedirectIcon />
            </button>
          )}
          {githubLink && (
            <button onClick={() => redirectToLink(githubLink)}>
              <GithubIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
