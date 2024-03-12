// "use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../utils/cn";
import { MyPorto } from "@/components/Pages/my-porto";

export default function Home() {
  return (
    <main className="overflow-hidden">

      <div className="h-[100rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <Boxes />
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <div className="mb-96">
          <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
            Tailwind is Awesome
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
            Framer motion is the best animation library ngl
          </p>
        </div>
        <MyPorto />
      </div>
    </main>
  );
}
