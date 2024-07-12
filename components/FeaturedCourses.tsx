"use client";
import React from 'react';
import { Label } from "./ui/label";
import Link from 'next/link';
import Image from 'next/image';
import { BackgroundGradient } from "./ui/background-gradient";
import img1 from "./img/cropped-1920-1080-288054.jpg";
import img2 from "./img/stretched-1920-1080-998168.jpg";
import img3 from "./img/img 3.jpg";
import img4 from "./img/cropped-1920-1080-983883.jpg";
import img5 from "./img/56006-beach-yoga-desktop-wallpaper-61324-1920x1080px.jpg";


function FeaturedCourses() {
  return (
    <div className='py-12 bg-gray-950 w-full'>
      <div className='text-center'>
        <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
          ELEVATE YOUR PRACTICE
        </h2>
        <p className='mt-4 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-20'>
          Dive Deep into Our Featured Course
        </p>
      </div>

      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          <div className='flex justify-center'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={img1}
                alt="photo"
                height="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Beginner's Meditation
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Description: Introduction to meditation techniques for beginners.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Duration: 4 weeks (1 session per week)
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Pricing: $99
              </p>
            </BackgroundGradient>
          </div>
          <div className='flex justify-center'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={img2}
                alt="photo"
                height="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Yoga Foundations
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Description: Learn fundamental yoga poses and alignment principles.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Duration: 6 weeks (2 session per week)
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Pricing: $149
              </p>
            </BackgroundGradient>
          </div>
          <div className='flex justify-center'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={img4}
                alt="photo"
                height="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Meditation Mastery
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Description: Deepen your meditation practice with advanced methods.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Duration: 4 weeks (1 session per week)
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Pricing: $129
              </p>
            </BackgroundGradient>
          </div>
          <div className='flex justify-center'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={img3}
                alt="photo"
                height="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Mindfulness and Stress Relief
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Description: Techniques to cultivate mindfulness and reduce stress.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Duration: 4 weeks (1 session per week)
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Pricing: $109
              </p>
            </BackgroundGradient>
          </div>
          <div className='flex justify-center'>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={img5}
                alt="photo"
                height="200"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Yoga for Flexibility
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Description: Improve flexibility and mobility through yoga poses.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Duration: 6 weeks (2 sessions per week)
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Pricing: $159
              </p>
            </BackgroundGradient>
          </div>
        </div>
      </div>

      <div className="flex mt-20 justify-center">
        <Link href={"/courses"}>
          <button
            className="relative group/btn flex space-x-2 items-center justify-center px-4 text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-950 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Explore All Courses
            </span>
            <BottomGradient />
          </button>
        </Link>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default FeaturedCourses;
