import Image from "next/image";
import React from "react";

interface IExpCardProps {
  imgUrl: string;
  alt: string;
  jobTitle: string;
  jobDescription?: string;
  employmentSpan: string;
}

const ExperienceCard = (props: IExpCardProps) => {
  const { imgUrl, alt, jobTitle, jobDescription, employmentSpan } = props;

  return (
    <div className="flex sm:flex-row flex-col justify-between p-[1.25rem] bg-expCardBg rounded-xl max-w-[45rem] mx-auto drop-shadow-lg">
      <div className="flex-1 flex items-center justify-center">
        <Image alt={alt} height={230} src={imgUrl} width={230} />
      </div>
      <div className="flex-1 sm:m-0 m-[25px_0_0_0]">
        <h3 className="text-xl text-titleColr">{jobTitle}</h3>
        <p className="text-subtitleColor m-[10px_0_0_0]">{jobDescription}</p>
        <div className="flex-1 text-subtitleColor text-sm m-[20px_0_0_0]">
          {employmentSpan}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
