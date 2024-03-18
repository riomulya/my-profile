"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import sman from "@/public/image/sman.jpg"
import unpam from "@/public/image/unpam.png"
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function Education() {
    const educationData = [
        {
            title: "SMA NEGERI 10 DEPOK",
            description: "07/2018 - 07/2021",
            badge: "High School - Science",
            image: sman,
        },
        {
            title: "University of Pamulang GPA(3.71)",
            description: (
                <>
                    <TextGenerateEffect words="As a student majoring in Informatics Engineering at Pamulang University, I possess a keen interest and
                    proficiency in user interface(UI) development and web applications using technologies such as Vue.js, React JS, HTML, CSS,
                    PHP, JavaScript, Typescript, Node Js.My goal is to continue learning and contribute to the development of innovative and
                    captivating applications." />
                    {/* </Textge> */}
                </>
            ),
            badge: "Bachelor's Degree Informatics Engineering (Expected): 2025 ",
            image: unpam,
        },
    ];

    return (
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 2, ease: "easeInOut" }} className="my-40">
            <TracingBeam className="px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {educationData.map((item, index) => (
                        <motion.div initial={{ opacity: 0.5, x: -300 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 2, ease: "easeInOut" }} key={`education-${index}`} className="mb-10 mx-5">
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
                                        height="300"
                                        width="300"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                )}
                                {item.description}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </TracingBeam>
        </motion.section>
    );
}
