import Image from "next/image";
import React from "react";
import { LocationIcon } from "./icons";
import Socials from "./Socials";

const HeroSection = () => {
  return (
    <div className="flex items-center md:h-[calc(100vh-79px)] h-auto bg-bgPrimary px-[3rem] py-[3rem]">
      <div className="flex flex-row items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-semibold text-titleColor">
            Hi, I&apos;m Parbhat
          </h1>
          <p className="text-lg text-subtitleColor">
            I am skilled full-stack developer with a strong background in React,
            Next.js, HTML, CSS, MongoDB, Node.js, etc. Currently pursuing a BSc
            in Computer Science, I have hands-on experience building full-stack
            projects, including web applications and mobile apps.. I am
            Passionate about coding, and enjoys working with like-minded people
            who appreciate creativity and care for quality work.
          </p>
          <div className="grid gap-7 text-subtitleColor">
            <div className="flex items-center">
              <LocationIcon />
              Rourkela, India
            </div>
            <Socials />
          </div>
        </div>
        <div className="md:flex hidden px-[3rem]">
          <Image
            width={1000}
            height={1000}
            src="/hero-img.png"
            alt="Parbhat's portfolio | Hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
