import Image from "next/image";
import React from "react";

interface IOpenSourceCardProps {
  logoUrl: string;
  alt: string;
  projectName: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  prLink: string;
  contributionDate: string;
}

const OpenSourceCard = (props: IOpenSourceCardProps) => {
  const {
    logoUrl,
    alt,
    projectName,
    description,
    technologies,
    repositoryUrl,
    prLink,
    contributionDate,
  } = props;

  return (
    <div className="flex sm:flex-row flex-col justify-between p-[1.25rem] bg-expCardBg rounded-xl max-w-[45rem] mx-auto drop-shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex-1 flex items-center justify-center">
        <a
          className="hover:transform hover:scale-105 transition-transform duration-300"
          href={repositoryUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image alt={alt} height={200} src={logoUrl} width={200} />
        </a>
      </div>
      <div className="flex-1 sm:m-0 m-[25px_0_0_0] flex flex-col gap-3">
        <div>
          <a
            className="text-xl text-titleColr hover:text-blue-500 transition-colors"
            href={repositoryUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {projectName}
          </a>
          <p className="text-subtitleColor text-sm m-[5px_0_0_0]">
            {contributionDate}
          </p>
        </div>

        <p className="text-subtitleColor text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-opacity-20 border border-blue-500 border-opacity-30 text-titleColr"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <a
            className="inline-flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 transition-colors font-medium"
            href={prLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Pull Requests →
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceCard;
