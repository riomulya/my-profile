"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconAccessible, IconActivity, IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export function Navbar() {
    const navItems = [
        {
            name: "About",
            link: "hero",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Skill",
            link: "Skill",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Project",
            link: "Projects",
            icon: (
                <IconActivity className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Education",
            link: "Education",
            icon: (
                <IconAccessible className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}