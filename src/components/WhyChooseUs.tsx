"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Personalized Instruction
        </div>
      ),
    },
    {
      title: 'Tailored Lessons for Every Skill Level',
      description:
        'Whether you’re a beginner or an advanced player, our flexible lesson structures adapt to your pace and goals, ensuring continuous and meaningful progress.',
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] text-white">
          Skill-Based Progression
        </div>
      ),
    },
    {
      title: 'World-Class Instructors at Your Fingertips',
      description:
        'Our instructors bring years of performance and teaching experience, providing expert mentorship that inspires, challenges, and elevates your musical journey.',
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--rose-500),var(--fuchsia-500))] text-white">
          Expert Mentorship
        </div>
      ),
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Experience the difference of real-time feedback and active engagement. Improve faster and more effectively with direct, hands-on coaching every step of the way.',
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--cyan-600))] text-white">
          Real-Time Feedback
        </div>
      ),
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'From modern production tools to genre-spanning techniques, our forward-thinking curriculum keeps you aligned with today’s music industry trends.',
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--amber-500))] text-white">
          Modern Techniques
        </div>
      ),
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'Our rich and ever-growing library of lessons, challenges, and tools ensures that your passion for music always has room to expand and thrive.',
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--lime-500),var(--green-500))] text-white">
          Continuous Growth
        </div>
      ),
    },
  ];
  

function WhyChooseUs() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
