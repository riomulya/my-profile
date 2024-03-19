// "use client";
import React from "react";
import { Sertification } from "@/components/Pages/sertification";
import Hero from "@/components/Layout/hero";
import Projects from "@/components/Pages/projects";
import { Education } from "@/components/Pages/education";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="h-auto relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
        <Hero />
        <Sertification />
        <Projects />
        <Education />
      </div>
    </main >
  );
}



