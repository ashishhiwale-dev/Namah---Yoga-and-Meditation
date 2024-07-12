import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-full md:h-[50rem] w-full rounded-md flex flex-col 
    items-center justify-center relative overflow-hidden 
    mx-auto py-10 md:py-0" 

    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 relative z-1- w-full text-center'>
        
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
                Discover Inner Peace and Wellness</h1>
            <p 
            className="mt-6 px-1 font-normal text-base md:text-lg text-neutral-400 max-w-3xl mx-auto">
                At <span className="font-bold  bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-orange-700">Namah</span>, we invite you to embark on a journey of self-discovery and transformation through the practices of meditation and yoga.   </p>
            
            <p   className="mt-6 font-normal text-base md:text-lg text-neutral-400 max-w-3xl mx-auto">
            Step into the Light to nurture your  inner peace and well-being.
            </p>
            <div className='mt-8'>
                <Link href={"/courses"}>
                <Button
                    borderRadius="1.75rem"
                      className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                        Explore Courses
                </Button>
                </Link>

            </div>
        </div>
        
        
    </div>
  )
}

export default HeroSection