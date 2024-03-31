
'use client'
// import data from './data/data.json'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import ProjectCard from './Components/ProjectCard';
import ExperienceCard from './Components/ExperienceCard';

import { projects } from './data/data.json'
import {experience} from './data/data.json'

import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <section className='h-[70vh] min-h-[600px] max-h-[1200px] w-full bg-baseBg relative'>

        <div></div>

        {/* Header section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 max-w-[1060px] text-title-heading ">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-8xl whitespace-nowrap font-semibold opacity-0 animate-fadeInLeft">Hi, I&apos;m Aldrich Reboja</h1>
          <p className="text-lg sm:text-2xl animate-fadeInLeft">Software Engineer</p>
          <p className="my-8 text-sm max-w-[95%] opacity-0 animate-[fadeInLeft_1s_ease-in-out_forwards_1s] ">
            From my early days immersed in a multitude of video games, I have cultivated a unique foundation that has influenced my journey as a <strong>Full Stack Engineer</strong>. 
            Navigating through various genres - from strategy and role-playing games to fast-paced shooters - they have both honed my strategic thinking and problem solving skills but also 
            helped foster an easily adaptable mindset necessary with overcome various challenges.
          </p>
          <p className="my-8 text-sm max-w-[95%] opacity-0 animate-[fadeInLeft_1s_ease-in-out_forwards_1s]">
            Today i&apos;ve had the honor and opportunity to be able to approach and implement new technologies through hands-on learning, a trait that has proved to be invaluable in a 
            constantly changing field. Currently I am searching for a role that will allow me to grow both as a developer and as an asset to the company. On my free time I am either working on improving my early and late game strategies in <strong>Teamfight Tactics</strong>, 
            or out enjoying and learning about various cultures through food.
          </p>

          <div className='flex opacity-0 animate-[fadeInLeft_1s_ease-in-out_forwards_2s]'>
            <Link href = "https://www.Github.com/aktreboja" target='_blank' rel='noopener noreferrer'><FaGithub className='w-10 h-10 mr-2'/></Link>
            <Link href = "mailto: aktreboja@gmail.com" target='_blank' rel ="noopener noreferrer"><SiGmail  className='w-10 h-10 mx-2'/></Link>
            <Link href = "https://www.linkedin.com/in/aktreboja" target='_blank' rel ="noopener noreferrer"><FaLinkedin className='w-10 h-10 mx-2'/></Link>
          </div>
        </div>
      </section>
      <section className='relative w-full h-full'>
        {/* Projects Section */}
        <div className='max-w-[1060px] w-4/5 mx-auto mb-20'>
          <h3 className='mx-auto mt-12 font-semibold text-4xl '>Projects</h3>
          {/* Projects here  */}
          {
            projects && projects.map((project, key) => (
              <ProjectCard 
                key={key}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                skills={project.skills}
                sourceCode={project.sourceCode}
                liveSite={project.liveSite}
                projectImage={project.projectImage}
                 />
                )
              )
          }
        </div>
      </section>
      <section className='relative w-full h-full'>
        {/* Projects Section */}
        <div className='max-w-[1060px] w-4/5 mx-auto mb-20'>
          <h3 className='mx-auto mt-12 font-semibold text-4xl '>Work</h3>
          {/* Projects here  */}
          {

            experience && experience.map((exp, key) => (
              <ExperienceCard
                key={key}
                title={exp.title}
                company={exp.company}
                timeline={exp.timeline}
                description={exp.description}
                skills={exp.skills}
                liveSite={exp.liveSite}
                sourceCode= {exp.sourceCode} 
                projectImage={exp.projectImage}/>
            ))
          }
        </div>
      </section>

      <footer className='w-full py-10'>
          <p className='text-xl text-center'>Designed and Built by <Link href = "https://www.github.com/aktreboja" className='underline' >Aldrich Reboja</Link> &copy; 2024</p>
      </footer>
    </main>
  );
}
