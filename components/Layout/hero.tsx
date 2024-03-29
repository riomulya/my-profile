"use client"

import React from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import profile from "@/public/image/profile.png";
import { CardItem, CardBody, CardContainer } from "@/components/ui/3d-card";
import { cn } from "../../utils/cn";
import { motion } from 'framer-motion';
import { IconDownload } from "@tabler/icons-react";

export default function Hero() {
    const TEXT_PROFILE = "Hey, I'm Rio Mulya Syawal, a web developer specialist. Immersed in the world of coding, As a self-taught developer, I've cultivated my skills by seamlessly merging artistic creativity with technical prowess. I craft seamless and visually captivating user experiences.";

    const handleDownloadCV = () => {
        const cvUrl = "/cv/Rio Mulya Syawal - Web Developer - CV .pdf";
        console.log('button clicked')
        window.open(cvUrl, "_blank");
    };

    return (
        <div className="mb-72" id='hero'>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-4">
                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, origin: 1 }}
                    className='xl:ml-60 mx-5 mt-32'
                >
                    <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                        Coder Enthusiast
                    </h1>

                    <TextGenerateEffect words={TEXT_PROFILE} className='font-mono font-light text-xl text-black my-3' />

                    <button onClick={handleDownloadCV}>
                        <div
                            className="bg-inherit opacity-1 inline-flex h-12 mt-3 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                            Resume
                            <IconDownload className='ml-3' />
                        </div>
                    </button>
                </motion.div>

                <motion.div
                    initial={{ x: 500 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 2, origin: 1 }}
                    className='flex justify-center mx-5'
                >
                    <CardContainer className="inter-var">
                        <CardBody className="bg-transparent relative group/card h-auto rounded-xl p-6 border">
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image className="z-20 border-1 rounded-full w-full object-cover group-hover/card:shadow-xl" src={profile} width={400} height={400} alt={"profile"} />
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </motion.div>
            </div>
        </div>
    );
}
