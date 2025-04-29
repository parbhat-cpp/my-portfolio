import React from "react";
import Tag from "./Tag";
import { CopyIcon, EmailIcon } from "./icons";
import copy from "clipboard-copy";
import Socials from "./Socials";
import { myEmail } from "@/constants";
import Link from "next/link";

const Contact = () => {
  const copyEmail = async () => {
    await copy(myEmail);
  };

  return (
    <>
      <div
        className="py-[3rem] md:px-[3rem] px-[1rem] bg-bgSecondary"
        id="contact"
      >
        <div className="flex justify-center">
          <Tag text="Get in touch" />
        </div>
        <div className="flex flex-col items-center text-center text-subtitleColor md:gap-3 gap-5 m-[20px_0_0_0]">
          <p>
            What&apos;s next? Feel free to reach out if you&apos;re looking for
            a developer, have a query, or simply want to connect.
          </p>
          <div className="flex items-center justify-center gap-2 md:text-3xl text-2xl">
            <EmailIcon />
            <Link aria-label="Contact Email" href={`mailto:${myEmail}`}>
              {myEmail}
            </Link>
            <button onClick={() => copyEmail()}>
              <CopyIcon />
            </button>
          </div>
          <p>You may also find me on these platforms!</p>
          <Socials />
        </div>
      </div>
    </>
  );
};

export default Contact;
