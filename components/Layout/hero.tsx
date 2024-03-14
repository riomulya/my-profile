"use client"

import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import profile from "@/public/image/profile.png"
import { CardItem, CardBody, CardContainer } from "@/components/ui/3d-card";
import { cn } from "../../utils/cn";
import { motion } from 'framer-motion';
import { Spotlight } from '../ui/Spotlight';

export default function Hero() {
    const TEXT_PROFILE = "Hey, I'm Rio Mulya Syawal, a web developer specialist. Immersed in the world of coding, As a self-taught developer, I've cultivated my skills by seamlessly merging artistic creativity with technical prowess. Specializing in front-end development, I craft seamless and visually captivating user experiences. "

    return (
        <div className=" mb-72" >
            <Spotlight
                className="-top-40 left-0 xl:left-60 xl:-top-72"
                fill="white"
            />
            <div className=" grid grid-cols-2">

                <motion.div
                    animate={{ width: "30vw", x: 0 }}
                    transition={{ duration: 2, origin: 2 }} className='ml-60 mt-32'>
                    <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                        Rio Mulya Syawal
                    </h1>

                    {/* <p className="text-center mt-2 text-neutral-300 relative z-20"> */}
                    <TextGenerateEffect words={TEXT_PROFILE} className='font-mono font-light text-xl text-black' />
                    {/* </p> */}
                    <button className="cursor-pointer inline-flex h-12 mt-3 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <a href="#">
                            Resume
                        </a>
                    </button>
                </motion.div>
                <motion.div initial={{ width: "0vw", x: "50vw" }}
                    animate={{ width: "50vw", x: 0 }}
                    transition={{ duration: 2, origin: 1 }}>
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
    )
}
