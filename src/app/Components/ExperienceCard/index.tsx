'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useEffect, useState } from 'react';

interface ExperienceCardProps {
    title: string;
    company?: string;
    timeline?: string;
    description: string[];
    skills: string[];
    liveSite: string;
    sourceCode: string;
    projectImage: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
    const { title, company, timeline, description, sourceCode, liveSite, skills, projectImage } = props;
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
                threshold: 0.25, // Adjust this value as needed based on your requirement
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
                    {title}
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondaryBg"></span>
                </h2>
                {company && <h5 className="font-semibold">{company}</h5>}
                {timeline && <p>{timeline}</p>}
                {description.map((desc, key) => (<p key={key} className="w-full md:w-[90%] my-5 pl-3 md:pl-6">{desc}</p>))}
                <div className="flex flex-wrap justify-center md:justify-normal">
                    {skills.map((skill, key) => (
                        <p key={key} className="mx-1 px-2 py-1 font-semibold group">
                            {skill}
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondaryBg"></span>
                        </p>
                    ))}
                </div>
            </div>
            <div className='pt-10 md:pr-5 mx-auto'>
                {projectImage ? <div className="w-80 h-60 relative "><Image src={projectImage} width={320} height={240} alt={title} /></div> : <div className='w-80 h-60 bg-secondaryBg'></div>}
                {sourceCode.length > 0 && <Link href={sourceCode} target="_blank" rel="noopener noreferrer">
                    <p className='cursor-pointer font-semibold text-simple-text mt-4 group w-fit'>
                        Source Code
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondaryBg"></span>
                    </p>
                </Link>}
                <Link href={liveSite} target="_blank" rel="noopener noreferrer">
                    <p className='cursor-pointer font-semibold text-simple-text my-2 group w-fit'>
                        Live Site
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-secondaryBg"></span>
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default ExperienceCard;