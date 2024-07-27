import React from "react";
import Tag from "./Tag";

const About = () => {
  return (
    <div className="bg-bgSecondary md:px-[3rem] px-[1rem] py-[3rem]" id="about">
      <div className="flex justify-center">
        <Tag text="About" />
      </div>
      <div className="flex flex-col items-center m-10">
        <h3 className="text-2xl text-titleColor">
          Curious about me? Here you have it:
        </h3>
        <div className="grid gap-5 m-[2.5rem_0_0_0] w-full text-subtitleColor">
          <p>
            Hello! My name is Parbhat Sharma, and I am currently pursuing a
            Bachelor of Science degree in Computer Science at Government
            Autonomous College, Rourkela. I am set to graduate in 2025. During
            my studies, I have developed a strong foundation in computer science
            principles and practical skills, which I have applied in various
            projects.
          </p>
          <p>
            I have gained hands-on experience in web and mobile application
            development, specializing in the MERN stack (MongoDB, Express.js,
            React, and Node.js) for web applications and Next.js for
            server-rendered React applications. Additionally, I have explored
            mobile app development using Flutter, a versatile framework that
            allows for the creation of beautiful and efficient cross-platform
            applications.
          </p>
          <p>
            My journey into the world of software development has been enriched
            by a full-stack developer internship, where I had the opportunity to
            work on real-world projects. This experience not only honed my
            technical skills but also provided me with valuable insights into
            the collaborative and iterative nature of software development. I
            learned to navigate complex codebases, optimize performance, and
            ensure a seamless user experience.
          </p>
          <p>
            I am passionate about learning new technologies and continuously
            improving my skills. My academic and practical experiences have
            equipped me with the ability to tackle challenging problems and
            develop innovative solutions. As I approach my final year of
            studies, I am eager to explore new opportunities in the tech
            industry, contribute to impactful projects, and continue my growth
            as a software developer.
          </p>
          <p>
            Thank you for taking the time to learn about me. I look forward to
            connecting with like-minded individuals and organizations that share
            my enthusiasm for technology and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
