import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-borders'

const Herosection = () => {



    return (
        <div className='flex flex-col justify-center items-center h-auto md:h-[40rem] mx-auto w-full py-10 md:py-0 '>
            <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
            <div className='p-4 relative z-10 w-full flex flex-col gap-4 items-center justify-center text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the Art of Music</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"'>Dive into our comprehensive Music Courses and transform your music journey today. Whether
                    you are a  begginer or looking to refine your skills, join us to unlock your true potential
                </p>
                <div className='mt-6'>
                    <Button>Explore Courses</Button>
                </div>
            </div>
        </div>
    )
}

export default Herosection
