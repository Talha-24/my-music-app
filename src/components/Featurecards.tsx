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
            <div className='mt-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10'>
                    {Courses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient className='flex flex-col text-white bg-black :bg-zinc-900 max-w-sm h-full'>
                                <div className='flex flex-col gap-2 bg-black rounded-2xl p-3'>
                                    <p className='text-xl text-center font-semibold'>{course.title}</p>
                                    <p>{course.description}</p>
                                    <p>{course.instructor}</p>
                                    <Link className='text-center border-1 w-fit self-center px-2' href={`/courses/${course.slug}`}>
                                    Explore All Courses</Link>
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
