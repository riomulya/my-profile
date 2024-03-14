// "use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";

import { MyPorto } from "@/components/Pages/my-porto";
import Hero from "@/components/Layout/hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="h-[100rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <Boxes />
        <Hero />
        <MyPorto />
      </div>
    </main >
  );
}



