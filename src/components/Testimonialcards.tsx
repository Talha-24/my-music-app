import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { cn } from '@/utility/cn';

const Testimonialcards = () => {
    const testimonials = [
        {
            quote:
                "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
            name: "Charles Dickens",
            title: "A Tale of Two Cities",
        },
        {
            quote:
                "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
            name: "William Shakespeare",
            title: "Hamlet",
        },
        {
            quote: "All that we see or seem is but a dream within a dream.",
            name: "Edgar Allan Poe",
            title: "A Dream Within a Dream",
        },
        {
            quote:
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
            name: "Jane Austen",
            title: "Pride and Prejudice",
        },
        {
            quote:
                "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
            name: "Herman Melville",
            title: "Moby-Dick",
        },
    ];

    return (
        <div className="h-screen  rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center  w-full overflow-hidden gap-8  relative ">
            <div className={cn("[background-size:20px_20px]",
                "w-full",
                "h-full",
                "flex",
                "flex-col",
                "items-center",
                "justify-center",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",)}>
                <h1 className='text-center max-[500px]:text-[20px] text-2xl  md:3xl font-extrabold mb-15' >Hear our harmony : Sounds of Success</h1>
                <div>
                    <InfiniteMovingCards items={testimonials} direction={'left'} speed='slow' />
                </div>
            </div>

        </div>
    )
}

export default Testimonialcards
