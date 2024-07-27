import React from "react";
import { GithubIcon, InstagramIcon, TwitterIcon } from "./icons";
import { socialsLink } from "@/constants";

const Socials = () => {

  const redirectToLink = (link: string) => {
    window.open(link);
  };

  return (
    <div className="flex gap-3">
      <button onClick={() => redirectToLink(socialsLink.github)}>
        <GithubIcon />
      </button>
      <button onClick={() => redirectToLink(socialsLink.twitter)}>
        <TwitterIcon />
      </button>
      <button onClick={() => redirectToLink(socialsLink.instagram)}>
        <InstagramIcon />
      </button>
    </div>
  );
};

export default Socials;
