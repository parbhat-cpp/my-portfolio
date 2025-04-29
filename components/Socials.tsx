import React from "react";
import { GithubIcon, InstagramIcon, TwitterIcon } from "./icons";
import { socialsLink } from "@/constants";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-3">
      <Link aria-label="Github Link" href={socialsLink.github}>
        <GithubIcon />
      </Link>
      <Link aria-label="Twitter/X Link" href={socialsLink.twitter}>
        <TwitterIcon />
      </Link>
      <Link aria-label="Instagram Link" href={socialsLink.instagram}>
        <InstagramIcon />
      </Link>
    </div>
  );
};

export default Socials;
