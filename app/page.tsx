// "use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";

import { SoftSkills } from "@/components/Pages/soft-skills";
import Hero from "@/components/Layout/hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="h-[100rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        {/* <Boxes /> */}
        <BackgroundBeams />
        <Hero />
        <SoftSkills />
      </div>
    </main >
  );
}



