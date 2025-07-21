"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const whyChoseUsContent = [
  {
    title: 'Limitless Learning Opportunities',
    description: 'Unlock access to an ever-growing library of music courses, tutorials, and masterclasses tailored to all skill levels. Whether you’re a complete beginner or an advanced musician, our platform ensures you always have something new to learn and explore, helping you stay inspired and continuously improving your musical talents.'
  },
  {
    title: 'Learn from Industry Experts',
    description: 'Our courses are led by world-class musicians, composers, and certified instructors with years of teaching and performance experience. You’ll receive expert guidance, practical insights, and real-world techniques that go beyond textbooks, making learning truly immersive and impactful.'
  },
  {
    title: 'Flexible and Personalized Learning',
    description: 'We understand that every learner is different. That’s why our platform allows you to learn at your own pace, on your own schedule. With personalized course recommendations, progress tracking, and practice reminders, you stay in control of your musical journey.'
  },
  {
    title: 'Interactive & Engaging Platform',
    description: 'Practice your skills with interactive exercises, real-time feedback, downloadable resources, and live Q&A sessions. Our user-friendly platform keeps you engaged and motivated, turning your practice time into a fun, rewarding experience every day.'
  },
  {
    title: 'Learn from Industry Experts',
    description: 'Our courses are led by world-class musicians, composers, and certified instructors with years of teaching and performance experience. You’ll receive expert guidance, practical insights, and real-world techniques that go beyond textbooks, making learning truly immersive and impactful.'
  },
  {
    title: 'Flexible and Personalized Learning',
    description: 'We understand that every learner is different. That’s why our platform allows you to learn at your own pace, on your own schedule. With personalized course recommendations, progress tracking, and practice reminders, you stay in control of your musical journey.'
  },
]
export function WhyChoseUs(){
    return(
        <div className="w-full">
            <StickyScroll content={whyChoseUsContent}/>
        </div>
    )
}
    

