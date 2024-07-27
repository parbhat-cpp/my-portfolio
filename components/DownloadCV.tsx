import { resumeLink } from "@/constants";
import React from "react";

const DownloadCV = () => {
  const handleClick = () => {
    window.open(resumeLink);
  };

  return (
    <button
      className="px-4 py-2 bg-navBtnBg text-navBtnTxt pointer rounded-xl"
      onClick={() => handleClick()}
    >
      Download CV
    </button>
  );
};

export default DownloadCV;
