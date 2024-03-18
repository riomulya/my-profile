"use client"

import { cn } from '@/utils/cn'
import React from 'react'
import { Link } from "react-scroll"


const navItems = [
    {
        name: "About",
        link: "hero",
    },
    {
        name: "Skill",
        link: "Skill",
    },
    {
        name: "Project",
        link: "Projects",
    },
    {
        name: "Education",
        link: "Education",
    },
];

export default function Footer() {
    return (
        <footer className="flex justify-center px-4 text-gray-800 bg-inherit">
            <div className="container px-6 py-6">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <Link className='cursor-pointer' to="hero"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={5000}>
                        <h1 className={cn("md:text-lg text-lg text-white relative z-20")}>
                            @Rio Mulya Syawal
                        </h1>
                    </Link>

                    <div className="flex mt-4 md:m-0">
                        <div className="-mx-4">
                            {navItems.map((navItem: any, idx: number) => (
                                <Link
                                    key={`link=${idx}`}
                                    to={navItem.link}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={5000}
                                    className="cursor-pointer px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                                >
                                    {navItem.name}
                                </Link>
                            ))}
                            {/* <Link to={navItem.link}
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500} className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</Link>
                            <Link href="#Sertification" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Skill</Link>
                            <Link href="#Projects" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Project</Link>
                            <Link href="#Education" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Education</Link>
                            <Link href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
