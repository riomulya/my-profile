import { cn } from '@/utils/cn'
import React from 'react'

export default function Footer() {
    return (
        <footer className="flex justify-center px-4 text-gray-800 bg-inherit">
            <div className="container px-6 py-6">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <a href="#">
                        <h1 className={cn("md:text-lg text-lg text-white relative z-20")}>
                            @Rio Mulya Syawal
                        </h1>
                    </a>

                    <div className="flex mt-4 md:m-0">
                        <div className="-mx-4">
                            <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">About</a>
                            <a href="#Sertification" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Skill</a>
                            <a href="#Projects" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Project</a>
                            <a href="#Education" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Education</a>
                            <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
