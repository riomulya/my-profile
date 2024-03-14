"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export function Navbar() {
    const navItems = [
        {
            name: "About",
            link: "/",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Skil",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Project",
            link: "/Project",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}