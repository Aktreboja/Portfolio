"use client"
import Image from 'next/image';
import Link from 'next/link';
import LinkedIn from '../../public/linkedin-logo.png'
import Github from '../../public/github-mark.png'
import AboutText from './Components/Text/AboutText';
import ExperienceCard from './Components/ExperienceCard';
import { useRef } from 'react';

import data from './data/data.json'

export default function Home() {
  const pageHeaders = ['About', 'Experience', 'Projects'];

  // Ref for the container to scroll
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="w-full bg-secondaryBg">
        <main className="w-full min-h-screen flex flex-col lg:flex-row">
          {/* Left side - sticky */}
          <section className="lg:w-1/2 lg:min-h-screen bg-secondaryBg lg:flex lg:flex-col lg:items-end lg:justify-between lg:sticky top-0 h-full">
            <div className="min-w-xl lg:h-screen  flex justify-between flex-col px-4">
              <div className='lg:py-24'>
                <h1 className="text-title-heading text-4xl sm:text-5xl font-semibold tracking-tight mb-4 mt-3 lg:mt-0">Aldrich Reboja</h1>
                <p className="text-title-heading font-medium tracking-tight mb-4">Full Stack Engineer</p>
                <p className="text-simple-text w-2/3 tracking-tight text-sm ">
                  I focus on building seamless and scalable web applications, with a hint of minimalist design.
                </p>
              </div>

              <div className='hidden lg:block lg:py-24'>
                {
                  pageHeaders.map((header, index) => (
                    <p key={index} className='text-simple-text py-2 font-semibold cursor-pointer' onClick={() => scrollToSection(header.toLowerCase())}>{header}</p>
                  ))
                }
              </div>

              <div className=' w-full flex lg:justify-end lg:px-9 lg:py-16 mt-6 mb-12'>
                <Link href="https://www.linkedin.com/in/aktreboja/" target='_blank'><Image className='h-fit w-7 lg:w-9 mr-3 filter invert cursor-pointer' src={LinkedIn} width={100} alt="Linkedin Logo" /></Link>
                <Link href="https://github.com/AldrichhhXO" target="_blank"><Image className='h-fit w-7 lg:w-9 mr-3 filter invert cursor-pointer' src={Github} width={100} alt="Github Logo" /></Link>
                {/* <Image className='h-fit w-8 mr-3' src = {LinkedIn} width = {100} alt = "Linkedin Logo"/> */}
              </div>
            </div>
          </section>

          {/* Right side - scrollable */}
          <section className="w-full lg:w-1/2 h-full lg:overflow-y-auto" ref={containerRef}>
            {/* About section */}
            <section className="flex lg:px-8 ">
              <div className="w-full lg:max-w-lg lg:pt-24 lg:mb-12 text-sm px-4">
                <a className='block lg:hidden font-bold text-title-heading py-5' >About</a>
                <div id="about" className={`lg:block hidden ${containerRef.current && containerRef.current.scrollTop > containerRef.current.offsetHeight ? 'opacity-0 pointer-events-none' : ''}`}>
                  {
                    data.aboutText.map((text, index) => (
                      <AboutText
                        key={index}
                        aboutText={text} />
                    ))
                  }
                </div>
              </div>
            </section>

            <p className="text-title-heading px-4 py-3 font-bold lg:hidden" >Experience</p>
            <section id="experience" className="lg:mb-16 w-full  lg:px-8 lg:max-w-xl flex justify-center lg:block">
              {
                data.experience.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    timeline={experience.timeline}
                    positionName={experience.positionName}
                    description={experience.description}
                    skills={experience.skills} />
                ))
              }
            </section>

            <p className="text-title-heading px-4 py-3 font-bold lg:hidden" id="projects">Projects</p>
            <section id="projects" className="w-full lg:px-8 lg:max-w-xl flex flex-col justify-center items-center lg:block">
              {
                data.projectExperience.map((experience, index) => (
                  <ExperienceCard
                    key={index}
                    timeline={experience.timeline}
                    positionName={experience.positionName}
                    description={experience.description}
                    links={experience.links}
                    skills={experience.skills} />
                ))
              }
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
