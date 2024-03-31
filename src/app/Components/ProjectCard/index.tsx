import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from 'react';

interface ProjectCardProps {
    projectTitle: string;
    projectDescription: string[];
    skills: string[];
    sourceCode: string;
    liveSite: string;
    projectImage?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {

    const { projectTitle, projectDescription, sourceCode, liveSite, skills, projectImage } = props;
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.75,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div ref={cardRef} className={`mt-10 flex flex-col lg:flex-row opacity-0 ${isVisible ? 'animate-[fadeInLeft_1s_ease-in-out_forwards]' : ''}`}>
            <div>
                <h2 className='text-2xl font-semibold w-fit group'>
                    {projectTitle}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondaryBg"></span>
                </h2>
                {
                    projectDescription.map((desc, key) => (<p key={key} className="w-full md:w-[90%] my-5 pl-3 md:pl-6">{desc}</p>))
                }
                <div className="flex flex-wrap justify-center md:justify-normal">
                    {
                        skills.map((skill, key) => (<p key={key} className="mx-1 px-2 py-1 font-semibold group">
                            {skill}
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondaryBg"></span>
                        </p>))
                    }
                </div>
            </div>

            {/* Project Images */}
            <div className='pt-10 md:pr-5 mx-auto'>
                {projectImage ? <div className="w-80 h-60 relative "><Image src={projectImage} width={320} height={240} alt={projectTitle} /></div> : <div className='w-80 h-60 bg-secondaryBg'></div>}
                
                <Link href={sourceCode} target="_blank" rel="noopener noreferrer">
                    <p className='cursor-pointer font-semibold text-simple-text mt-5 group w-fit'>
                        Source Code
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondaryBg"></span>
                    </p>
                </Link>
                
                {liveSite.length > 0 &&
                    <Link href={liveSite} target="_blank" rel="noopener noreferrer">
                        <p className='cursor-pointer font-semibold text-simple-text my-2 group w-fit'>
                            Live Site
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondaryBg"></span>
                        </p>
                    </Link>
                }
            </div>
        </div>
    )
}

export default ProjectCard;
