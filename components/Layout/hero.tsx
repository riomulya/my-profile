"use client"

import React from 'react'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import profile from "@/public/image/profile.png"
import { CardItem, CardBody, CardContainer } from "@/components/ui/3d-card";
import { cn } from "../../utils/cn";
import { motion } from 'framer-motion';

export default function Hero() {
    const TEXT_PROFILE = "Hey, I'm Rio Mulya Syawal, a web developer specialist. Immersed in the world of coding, As a self-taught developer, I've cultivated my skills by seamlessly merging artistic creativity with technical prowess. Specializing in front-end development, I craft seamless and visually captivating user experiences. "

    return (
        <div className=" mb-72" >
            <div className=" grid grid-cols-2">
                <div className='ml-60 mt-32'>
                    <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                        Rio Mulya Syawal
                    </h1>

                    {/* <p className="text-center mt-2 text-neutral-300 relative z-20"> */}
                    <TextGenerateEffect words={TEXT_PROFILE} className='font-mono font-light text-xl' />
                    {/* </p> */}
                </div>
                <motion.div initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}>
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
