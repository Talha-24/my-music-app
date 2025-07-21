"use client";
import Link from 'next/link'
import React from 'react';
import coursesData from "@/data/music_courses.json"
import { Course } from '@/interfaces/interfaces';
import { h2 } from 'motion/react-client';
import { BackgroundGradient } from './ui/background-gradient';
import { Button } from './ui/moving-borders';

const Featurecards = () => {

    const Courses = coursesData.courses;

    return (
        <div className='flex flex-col bg-gray-900 p-10'>
            <div>
                <div className='text-center w-full flex flex-col  gap-2 '>
                    <h1 className='text-base text-teal-600 font-semibold tracking-wide uppercase"'>FEATURED Courses</h1>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
                </div>
            </div>
                   <div className="mt-10 mx-8">
            <div className="grid max-sm:grid-col-1 md:grid-col-2 grid-cols-3 gap-8 justify-center">
                {Courses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>

            <div className='mt-20 text-center'>
                <Link href={"/courses"}>
                    <button className='bg-white text-black py-[6px] px-5 cursor-pointer'>  All Courses</button>
                </Link>
            </div>
        </div>
    )
}

export default Featurecards
