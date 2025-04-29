"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { ThemeSwitch } from "./theme-switch";
import { MenuIcon } from "./icons";
import { useAtom } from "jotai";
import { openMenu } from "@/state";
import DownloadCV from "./DownloadCV";

const Navbar = () => {
  const [open, setOpen] = useAtom(openMenu);

  return (
    <div className="sticky top-0 left-0 flex items-center justify-between w-full py-[1.2rem] px-[3rem] bg-bgPrimary z-50">
      <Link href={"/"}>
        <h2 className="text-3xl font-medium text-titleColor">{"<PS />"}</h2>
      </Link>
      <div className="sm:flex hidden items-center">
        <div className="flex items-center text-subtitleColor gap-3 mx-5">
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <DownloadCV />
        </div>
      </div>
      <div className="sm:hidden flex">
        <Button
          isIconOnly
          aria-label="Menu"
          variant="flat"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
