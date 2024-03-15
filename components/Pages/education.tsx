"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export function Education() {
    // Define the education data based on your CV
    const educationData = [
        {
            title: "SMA NEGERI 10 DEPOK",
            description: "07/2018 - 07/2021",
            badge: "High School - Science",
            image: "", // Replace with actual image URL if available
        },
        {
            title: "University of Pamulang GPA(3.71)",
            description: (
                <>
                    <p>
                        As a sixth‑semester student majoring in Informatics Engineering at Pamulang University, I possess a keen interest and
                        proficiency in user interface(UI) development and web applications using technologies such as Vue.js, React JS, HTML, CSS,
                        PHP, JavaScript, Typescript, Node Js.My goal is to continue learning and contribute to the development of innovative and
                        captivating applications.
                    </p>
                </>
            ),
            badge: "Bachelor's Degree Informatics Engineering (Expected): 2025 ",
            image: "", // Replace with actual image URL if available
        },
    ];

    return (
        <section className="my-40">
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {educationData.map((item, index) => (
                        <div key={`education-${index}`} className="mb-10">
                            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                                {item.badge}
                            </h2>

                            <p className={twMerge("text-xl mb-4")}>
                                {item.title}
                            </p>

                            <div className="text-sm prose prose-sm dark:prose-invert">
                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="Education thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                )}
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </section>
    );
}
