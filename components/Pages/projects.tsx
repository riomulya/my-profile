"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CardContainer, CardBody, CardItem } from '../ui/3d-card';
import { AnimatedTooltip } from '../ui/animated-tooltip';
import { LampContainer } from '../ui/lamp';
import ip_tracker_project from "@/public/image/ip_tracker.jpeg"
import tic_tac_toe from "@/public/image/tic-tac-toe.jpeg"
import penjualan_barang from "@/public/image/penjualan-barang.jpeg"
import pkm_porto from "@/public/image/pkm-porto.jpeg"
import css from "@/public/image/icon-tech-stack/css.png"
import html from "@/public/image/icon-tech-stack/html.png"
import java from "@/public/image/icon-tech-stack/java.png"
import js from "@/public/image/icon-tech-stack/js.png"
import php from "@/public/image/icon-tech-stack/php.png"
import vue from "@/public/image/icon-tech-stack/vue.png"
import sipus from "@/public/image/sipus.jpeg"

const projects = [
    {
        title: "IP Address Tracker",
        description: "IP Addres Tracker App made with Vue JS and integration with API GeoIpfy and Openstreetmap",
        repo: "https://github.com/riomulya",
        image: ip_tracker_project,
        stack: [
            {
                id: 1,
                name: "VUE JS",
                designation: "Front-end",
                image: vue,
            },
            {
                id: 2,
                name: "CSS",
                designation: "Style",
                image: css,
            },
        ]
    },
    {
        title: "Tic Tac Toe Web Game",
        description: "Project Web Game Tic Tac Toe, learn DOM in Javascript",
        repo: "https://github.com/riomulya",
        image: tic_tac_toe,
        stack: [
            {
                id: 1,
                name: "HTML",
                designation: "Markup Language",
                image: html,
            },
            {
                id: 2,
                name: "CSS",
                designation: "Style",
                image: css,
            },
            {
                id: 3,
                name: "Javascript",
                designation: "Interactive",
                image: js,
            },
        ]
    },
    {
        title: "Dekstop App",
        description: "Final project for a college programming course",
        repo: "https://github.com/riomulya",
        image: penjualan_barang,
        stack: [
            {
                id: 1,
                name: "JAVA",
                designation: "Dekstop App",
                image: java,
            },
        ]
    },
    {
        title: "Portofolio PKM",
        description: "Landing page project portfolio for community service",
        repo: "https://github.com/riomulya",
        image: pkm_porto,
        stack: [
            {
                id: 1,
                name: "HTML",
                designation: "Markup Language",
                image: html,
            },
            {
                id: 2,
                name: "CSS",
                designation: "Style",
                image: css,
            },
            {
                id: 3,
                name: "Javascript",
                designation: "Interactive",
                image: js,
            },
        ]
    },
    {
        title: "Public Library Information System",
        description: "Final project for junior web developer certification in 2022",
        repo: "https://github.com/riomulya",
        image: sipus,
        stack: [
            {
                id: 1,
                name: "HTML",
                designation: "Markup Language",
                image: html,
            },
            {
                id: 2,
                name: "CSS",
                designation: "Style",
                image: css,
            },
            {
                id: 3,
                name: "Javascript",
                designation: "Interactive",
                image: js,
            },
            {
                id: 4,
                name: "PHP",
                designation: "Back-end",
                image: php,
            },
        ]
    },
];

export default function Projects() {
    return (
        <section id='Projects' className='w-full mt-40'>
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="mt-2 bg-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    Projects
                </motion.h1>
            </LampContainer>
            <div className='mt-0 mb-10 sm:grid xl:grid-cols-2 sm:grid-cols-1'>
                {projects.map((project, index) => (
                    <motion.div key={index} initial={{ opacity: 0.5, x: 300 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 2, ease: "easeInOut" }}
                    >
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                                    {project.title}
                                </CardItem>
                                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                    {project.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <Image src={project.image} height="1000" width="1000" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
                                </CardItem>
                                <div className="flex mt-20 flex-row items-center justify-center mb-10 w-full">
                                    <AnimatedTooltip items={project.stack} />
                                </div>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                                        <a href={project.repo} target='_blank'>Repo</a>
                                    </CardItem>
                                    <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                                        <a href="https://github.com/riomulya" target='_blank'>
                                            See My Github
                                        </a>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
