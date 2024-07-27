import { Button } from "@nextui-org/button";
import React from "react";
import { CloseIcon } from "./icons";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import DownloadCV from "./DownloadCV";

interface INavMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavMenu = (props: INavMenuProps) => {
  const { open, setOpen } = props;

  return (
    <div
      className={`fixed top-0 left-0 bg-bgPrimary w-full h-screen z-10 text-titleColor ${open ? "block" : "hidden"}`}
    >
      <div className="flex items-center justify-between px-[30px] py-[20px]">
        <h2 className="text-2xl ">{"<PS />"}</h2>
        <Button
          isIconOnly
          aria-label="Menu"
          variant="flat"
          onClick={() => setOpen(!open)}
        >
          <CloseIcon />
        </Button>
      </div>
      <Divider />
      <div className="flex flex-col text-xl gap-4 px-[30px] py-[20px]">
        <Link href="#about">About</Link>
        <Link href="#work">Work</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
      <Divider />
      <div className="flex flex-col gap-5 px-[30px] py-[20px] text-xl">
        <div className="flex items-center justify-between">
          <p>Switch Theme</p>
          <ThemeSwitch />
        </div>
        <DownloadCV />
      </div>
    </div>
  );
};

export default NavMenu;
