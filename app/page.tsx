// "use client";
import React from "react";
import { Sertification } from "@/components/Pages/sertification";
import Hero from "@/components/Layout/hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Projects from "@/components/Pages/projects";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="h-auto relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        {/* <Boxes /> */}
        <BackgroundBeams />
        <Hero />
        <Sertification />
        <Projects />
      </div>
    </main >
  );
}



