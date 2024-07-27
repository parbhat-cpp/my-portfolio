"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NavMenu from "@/components/NavMenu";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { openMenu } from "@/state";
import { useAtom } from "jotai";

export default function Home() {
  const [open, setOpen] = useAtom(openMenu);

  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <NavMenu open={open} setOpen={setOpen} />
    </div>
  );
}
