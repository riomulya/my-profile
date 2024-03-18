"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import bnsp from "@/public/image/sertificate/bnsp-jwd.jpg"
import vue from "@/public/image/sertificate/vue-sertif.jpg"
import react_udemy from "@/public/image/sertificate/react-udemy.jpg"
import jsds from "@/public/image/sertificate/js-ds.jpeg"

const SERTIFICATE = [
    {
        title: "Junior Web Developer(BNSP)",
        description:
            "create a final project using HTML CSS PHP Javascript and MySQL, create a simple library for borrowing books using the CRUD model (Create, Read, Update, Delete) with additional login and sign up authentication features",
        content: (
            <div>
                <Image
                    src={bnsp}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Vue - Udemy",
        description:
            "learn to make reusable components, use vue animation for better UI/UX, create routing to go to the desired page using vue route, learn state management, use props to throw data to connect each other, use vuex for state management manage state (or data) from applications centrally, making it easier to manage and update state across various components that may be interdependent.",
        content: (
            <div >
                <Image
                    src={vue}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Data Structure and Algorithm",
        description:
            " I learned about various data structures such as arrays, linked lists, stacks, queues, and trees, as well as commonly used search and sorting algorithms. Emphasis was placed on understanding time and space complexity, aiding in evaluating algorithm performance and selecting efficient solutions for challenges encountered in web development and software engineering overall.",
        content: (
            <div>
                <Image
                    src={jsds}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "React - Udemy",
        description:
            " I gained essential skills in React.js, covering topics such as creating reusable components, utilizing React animation for improved UI/UX, implementing routing for seamless page navigation using React Router, managing state with props for efficient data communication between components, and leveraging Redux for centralized state management.",
        content: (
            <div>
                <Image
                    src={react_udemy}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
];

export function Sertification() {
    return (
        <motion.section id="Skill" className="min-w-max bg-transparent no-scrollbar mb-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 10, ease: "backOut" }}
        >
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Sertification
                </motion.h1>
            </LampContainer>
            <StickyScroll content={SERTIFICATE} contentClassName="" />
        </motion.section >
    );
}